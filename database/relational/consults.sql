-- ============================================================================
-- SCRIPT DE CONSULTAS, FUNCIONES Y PROCEDIMIENTOS RELACIONALES (SQL)
-- ============================================================================
-- Consulta 1: Resumen de tonelaje total procesado por tipo de ganga
SELECT g.mineral_name AS Tipo_Ganga, 
       COUNT(mb.id_batch) AS Total_Lotes,
       SUM(mb.batch_weight_tons) AS Toneladas_Totales,
       AVG(mb.batch_weight_tons) AS Promedio_Por_Lote
FROM mineral_batch mb
INNER JOIN mineral_reception mr ON mb.id_reception = mr.id_reception
INNER JOIN ganga g ON mr.id_ganga = g.id_ganga
GROUP BY g.mineral_name
ORDER BY Toneladas_Totales DESC;

-- Consulta 2: Reporte de telemetría de sensores por guardia de trabajo
SELECT ws.shift_name AS Guardia, 
       COUNT(pm.id_measurement) AS Total_Lecturas,
       MAX(pm.recorded_value) AS Valor_Maximo_Registrado,
       MIN(pm.recorded_value) AS Valor_Minimo_Registrado
FROM process_measurement pm
INNER JOIN metallurgical_process mp ON pm.id_process = mp.id_process
INNER JOIN work_shift ws ON mp.id_shift = ws.id_shift
GROUP BY ws.shift_name;

-- Consulta 3: Análisis de eficiencia de mallas de laboratorio por lote
SELECT mb.batch_code AS Codigo_Lote, 
       la.analysis_code AS Codigo_Analisis, 
       sa.mesh_number AS Tipo_Malla, 
       sa.percentage_passing AS Porcentaje_Pasante
FROM mineral_batch mb
INNER JOIN mineral_sample ms ON mb.id_batch = ms.id_batch
INNER JOIN laboratory_analysis la ON ms.id_sample = la.id_sample
INNER JOIN sieve_analysis sa ON la.id_analysis = sa.id_analysis
WHERE sa.percentage_passing < 85.00
ORDER BY mb.batch_code ASC;


-- INTEGRANTE 2: Subconsultas y Reportes Avanzados

-- Consulta 4: Lotes cuyo peso supera el promedio general de recepción
SELECT batch_code, batch_weight_tons, entry_status
FROM mineral_batch
WHERE batch_weight_tons > (SELECT AVG(batch_weight_tons) FROM mineral_batch)
ORDER BY batch_weight_tons DESC;

-- Consulta 5: Equipos de planta que registraron mediciones fuera de rango
SELECT oe.equipment_code, oe.equipment_name, oe.status
FROM operation_equipment oe
WHERE oe.id_equipment IN (
    SELECT DISTINCT mp.id_equipment 
    FROM metallurgical_process mp
    INNER JOIN process_measurement pm ON mp.id_process = pm.id_process
    WHERE pm.is_out_range = 1
);

-- Consulta 6: Operadores que han manejado procesos con mineral de alta pureza
SELECT w.first_name, w.last_name, p.position_name
FROM worker w
INNER JOIN position p ON w.id_position = p.id_position
WHERE w.id_worker IN (
    SELECT mp.id_worker 
    FROM metallurgical_process mp
    INNER JOIN concentrate c ON mp.id_process = c.id_process
    WHERE c.purity_percentage > 70.00
);

-- Consulta 7: Función para calcular el descarte estimado de mineral
DELIMITER $$
CREATE FUNCTION fn_CalcularDescarte (id_lote INT)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE peso_total DECIMAL(10,2);
    DECLARE peso_descarte DECIMAL(10,2);
    
    SELECT batch_weight_tons INTO peso_total FROM mineral_batch WHERE id_batch = id_lote;
    SET peso_descarte = peso_total * 0.12;
    RETURN peso_descarte;
END$$
DELIMITER ;

-- Consulta 8: Función para validar rangos críticos de sensores
DELIMITER $$
CREATE FUNCTION fn_VerificarAlertaSensor (valor DECIMAL(8,2), min_val DECIMAL(8,2), max_val DECIMAL(8,2))
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
    IF valor < min_val OR valor > max_val THEN
        RETURN 'CRÍTICO';
    ELSE
        RETURN 'NORMAL';
    END IF;
END$$
DELIMITER ;

-- Consulta 9: Función para formatear nombres de operadores
DELIMITER $$
CREATE FUNCTION fn_FormatearNombreTrabajador (nombre VARCHAR(100), apellido VARCHAR(100))
RETURNS VARCHAR(205)
DETERMINISTIC
BEGIN
    RETURN CONCAT(UPPER(apellido), ', ', nombre);
END$$
DELIMITER ;

-- Consulta 10: Procedimiento para registrar un nuevo lote con auditoría interna
DELIMITER $$
CREATE PROCEDURE sp_RegistrarLoteMineral(
    IN p_batch_code VARCHAR(50),
    IN p_weight DECIMAL(10,2),
    IN p_status VARCHAR(30),
    IN p_reception INT
)
BEGIN
    INSERT INTO mineral_batch (batch_code, batch_weight_tons, entry_status, id_reception)
    VALUES (p_batch_code, p_weight, p_status, p_reception);
    
    INSERT INTO audit_log (affected_table, operation_type, old_value, new_value)
    VALUES ('mineral_batch', 'INSERT', NULL, p_batch_code);
END$$
DELIMITER ;

-- Consulta 11: Procedimiento para actualizar el estado del equipo de planta
DELIMITER $$
CREATE PROCEDURE sp_ActualizarEstadoEquipo(
    IN p_equipment_code VARCHAR(50),
    IN p_new_status VARCHAR(30)
)
BEGIN
    UPDATE operation_equipment
    SET status = p_new_status
    WHERE equipment_code = p_equipment_code;
END$$
DELIMITER ;

-- Consulta 12: Procedimiento para extraer promedios de telemetría de un proceso
DELIMITER $$
CREATE PROCEDURE sp_ObtenerMetricasProceso(
    IN p_id_process INT,
    OUT p_avg_value DECIMAL(8,2)
)
BEGIN
    SELECT AVG(recorded_value) INTO p_avg_value
    FROM process_measurement
    WHERE id_process = p_id_process;
END$$
DELIMITER ;

-- Consulta 13: Trigger para auditoría automática ante cambios de estado de lotes
DELIMITER $$
CREATE TRIGGER tr_AuditarCambioEstadoLote
AFTER UPDATE ON mineral_batch
FOR EACH ROW
BEGIN
    IF OLD.entry_status <> NEW.entry_status THEN
        INSERT INTO audit_log (affected_table, operation_type, old_value, new_value)
        VALUES ('mineral_batch', 'UPDATE_STATUS', OLD.entry_status, NEW.entry_status);
    END IF;
END$$
DELIMITER ;

-- Consulta 14: Trigger preventivo para validar pesos lógicos de relaves
DELIMITER $$
CREATE TRIGGER tr_ValidarPesoTailings
BEFORE INSERT ON tailings
FOR EACH ROW
BEGIN
    IF NEW.weight_tons <= 0.00 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Error de Consistencia: El peso del relave industrial debe ser estrictamente positivo.';
    END IF;
END$$
DELIMITER ;

-- Consulta 15: Transacción para registrar proceso con cierre seguro de lote
DELIMITER $$
CREATE PROCEDURE sp_TxRegistrarYBloquearLote(
    IN p_start DATETIME, IN p_end DATETIME, IN p_batch INT, IN p_worker INT, IN p_equip INT
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
    END;

    START TRANSACTION;
        INSERT INTO metallurgical_process (start_date_time, end_date_time, id_batch, id_worker, id_equipment)
        VALUES (p_start, p_end, p_batch, p_worker, p_equip);
        
        UPDATE mineral_batch 
        SET entry_status = 'Procesado' 
        WHERE id_batch = p_batch;
    COMMIT;
END$$
DELIMITER ;
