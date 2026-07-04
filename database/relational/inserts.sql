-- ============================================================
-- SCRIPT DML: INSERCIÓN DE DATOS DE PRUEBA REALISTAS (MINEDATA)
-- ============================================================

-- 1. ÁREAS O DEPARTAMENTOS DE LA PLANTA (4 filas)
INSERT INTO department (department_name, department_description) VALUES
('Operaciones y Procesos', 'Control de circuitos de molienda, flotación y espesado.'),
('Control de Calidad', 'Laboratorio químico y granulométrico de muestras.'),
('Mantenimiento Técnico', 'Mantenimiento preventivo y correctivo de activos críticos.'),
('Seguridad y Medio Ambiente', 'Monitoreo de relaves y niveles de toxicidad ambiental.');
GO

-- 2. CARGOS OPERATIVOS (4 filas)
INSERT INTO position (position_name, position_description, id_department) VALUES
('Operador de Planta I', 'Responsable del monitoreo físico de celdas de flotación.', 1),
('Ingeniero de Procesos', 'Optimización de parámetros metalúrgicos y reactivos.', 1),
('Analista de Laboratorio', 'Ejecución de ensayos químicos y análisis granulométricos.', 2),
('Supervisor de Guardia', 'Coordinación y seguridad de los frentes de trabajo.', 1);
GO

-- 3. PERSONAL / TRABAJADORES (6 filas)
INSERT INTO worker (identity_document, first_name, last_name, email, id_position) VALUES
('71234567', 'Carlos', 'Mendoza Ramos', 'carlos.mendoza@minedata.pe', 1),
('45678912', 'Ana', 'Gomez Ventosilla', 'ana.gomez@minedata.pe', 3),
('09876543', 'Luis', 'Palacios Vega', 'luis.palacios@minedata.pe', 4),
('73451298', 'Jorge', 'Huamán Quispe', 'jorge.huaman@minedata.pe', 1),
('44556677', 'Elena', 'Ríos Pardo', 'elena.rios@minedata.pe', 2),
('76543210', 'Pedro', 'Castro Ortiz', 'pedro.castro@minedata.pe', 3);
GO

-- 4. TURNOS DE TRABAJO MINERO (3 filas)
INSERT INTO work_shift (shift_name, start_time, end_time) VALUES
('Guardia Día (A)', '07:00:00', '15:00:00'),
('Guardia Tarde (B)', '15:00:00', '23:00:00'),
('Guardia Noche (C)', '23:00:00', '07:00:00');
GO

-- 5. EQUIPOS DE OPERACIÓN PESADA (5 filas)
INSERT INTO operation_equipment (equipment_code, equipment_name, status) VALUES
('CH-01', 'Chancadora de Mandíbula Primaria', 'Operativo'),
('MB-02', 'Molino de Bolas 8x10', 'Operativo'),
('CF-10', 'Celda de Flotación Rougher 1', 'Operativo'),
('CF-11', 'Celda de Flotación Rougher 2', 'Operativo'),
('EP-05', 'Espesador de Concentrado', 'Mantenimiento');
GO

-- 6. ETAPAS DEL PROCESO METALÚRGICO (4 filas)
INSERT INTO process_stage (stage_name, stage_description) VALUES
('Chancado', 'Reducción primaria del tamaño del mineral bruto.'),
('Molienda', 'Liberación de partículas finas aptas para flotación.'),
('Flotación', 'Separación físico-química del mineral valioso de la ganga.'),
('Espesado', 'Deshidratación y obtención del concentrado final.');
GO

-- 7. ASOCIACIÓN EQUIPO - ETAPA (5 filas)
INSERT INTO equipment_stage (id_equipment, id_stage) VALUES
(1, 1), -- Chancadora en Chancado
(2, 2), -- Molino en Molienda
(3, 3), -- Celda 1 en Flotación
(4, 3), -- Celda 2 en Flotación
(5, 4); -- Espesador en Espesado
GO

-- 8. PARÁMETROS OPERACIONALES SCADA (5 filas)
INSERT INTO process_parameter (parameter_name, unit_of_measure, min_value, max_value, id_stage) VALUES
('Flujo de Alimentación', 'TMSH', 80.00, 120.00, 2),
('Presión de Ciclón', 'PSI', 12.00, 18.00, 2),
('Nivel de Pulpa', 'cm', 40.00, 60.00, 3),
('Flujo de Aire', 'CFM', 150.00, 250.00, 3),
('Porcentaje de Sólidos', '%', 30.00, 35.00, 4);
GO

-- 9. CARACTERIZACIÓN DE GANGA / GEOLOGÍA (3 filas)
INSERT INTO ganga (entry_date, description, origin_zone, total_weight_tons) VALUES
('2026-07-01', 'Ganga con alta presencia de cuarzo y silicatos duros.', 'Zona Norte - Veta Esperanza', 450.50),
('2026-07-02', 'Matriz piritosa con presencia moderada de arcillas.', 'Zona Sur - Tajo Abierto', 620.00),
('2026-07-03', 'Roca caja calcárea de dureza intermedia.', 'Zona Central - Galería 400', 380.20);
GO

-- 10. RECEPCIÓN DE MINERAL EN TOLVAS (3 filas)
INSERT INTO mineral_reception (reception_date, total_weight_tons, id_ganga) VALUES
('2026-07-01 08:30:00', 150.00, 1),
('2026-07-02 09:15:00', 200.00, 2),
('2026-07-03 14:00:00', 120.50, 3);
GO

-- 11. LOTES DE MINERAL OPERATIVOS (3 filas)
INSERT INTO mineral_batch (batch_code, batch_weight_tons, entry_status, id_reception) VALUES
('LOT-20260701-A', 50.00, 'Procesado', 1),
('LOT-20260702-B', 75.50, 'En Proceso', 2),
('LOT-20260703-C', 60.00, 'En Espera', 3);
GO

-- 12. MUESTRAS GEOLÓGICAS (3 filas)
INSERT INTO mineral_sample (sample_code, extraction_date, id_batch) VALUES
('MUE-01A', '2026-07-01 10:00:00', 1),
('MUE-02B', '2026-07-02 11:30:00', 2),
('MUE-03C', '2026-07-03 15:10:00', 3);
GO

-- 13. CORRIDAS O PROCESOS METALÚRGICOS (3 filas)
INSERT INTO metallurgical_process (start_date_time, end_date_time, id_batch, id_worker, id_shift, id_equipment) VALUES
('2026-07-01 08:00:00', '2026-07-01 16:00:00', 1, 1, 1, 2),
('2026-07-02 15:00:00', '2026-07-02 23:00:00', 2, 4, 2, 3),
('2026-07-03 23:00:00', '2026-07-04 07:00:00', 3, 1, 3, 4);
GO

-- 14. PRODUCTO FINAL: CONCENTRADO (3 filas)
INSERT INTO concentrate (purity_percentage, weight_tons, id_process) VALUES
(28.50, 4.20, 1),
(27.10, 5.80, 2),
(29.00, 4.90, 3);
GO

-- 15. DESECHO OPERACIONAL: RELAVES (3 filas)
INSERT INTO tailings (toxicity_level, weight_tons, id_process) VALUES
('Bajo', 45.80, 1),
('Moderado', 69.70, 2),
('Bajo', 55.10, 3);
GO

-- 16. ANALISIS DE LABORATORIO QUÍMICO (3 filas)
INSERT INTO laboratory_analysis (analysis_code, mineral_grade_porcentage, analysis_date, status, id_sample) VALUES
('REP-LAB-001', 1.45, '2026-07-01 14:30:00', 'Aprobado', 1),
('REP-LAB-002', 0.98, '2026-07-02 16:00:00', 'Aprobado', 2),
('REP-LAB-003', 1.20, '2026-07-03 19:30:00', 'Pendiente', 3);
GO

-- ============================================================
-- 17. GRAN VOLUMEN: TELEMETRÍA DE SENSORES SCADA (40 filas)
-- Simula ráfagas continuas de datos de procesos en tiempo real.
-- ============================================================
INSERT INTO process_measurement (recorded_value, measurement_time, is_out_range, id_process, id_parameter) VALUES
(95.50, '2026-07-01 08:05:00', 0, 1, 1), (14.20, '2026-07-01 08:05:00', 0, 1, 2),
(98.10, '2026-07-01 08:10:00', 0, 1, 1), (14.60, '2026-07-01 08:10:00', 0, 1, 2),
(102.30, '2026-07-01 08:15:00', 0, 1, 1), (15.10, '2026-07-01 08:15:00', 0, 1, 2),
(121.50, '2026-07-01 08:20:00', 1, 1, 1), (18.90, '2026-07-01 08:20:00', 1, 1, 2), -- Alerta por flujo alto
(99.00, '2026-07-01 08:25:00', 0, 1, 1), (14.80, '2026-07-01 08:25:00', 0, 1, 2),
(45.00, '2026-07-02 15:10:00', 0, 2, 3), (180.00, '2026-07-02 15:10:00', 0, 2, 4),
(48.50, '2026-07-02 15:20:00', 0, 2, 3), (195.20, '2026-07-02 15:20:00', 0, 2, 4),
(52.00, '2026-07-02 15:30:00', 0, 2, 3), (210.00, '2026-07-02 15:30:00', 0, 2, 4),
(62.40, '2026-07-02 15:40:00', 1, 2, 3), (255.00, '2026-07-02 15:40:00', 1, 2, 4), -- Alertas de nivel/aire
(50.10, '2026-07-02 15:50:00', 0, 2, 3), (198.00, '2026-07-02 15:50:00', 0, 2, 4),
(44.20, '2026-07-03 23:15:00', 0, 3, 3), (175.00, '2026-07-03 23:15:00', 0, 3, 4),
(46.00, '2026-07-03 23:30:00', 0, 3, 3), (185.50, '2026-07-03 23:30:00', 0, 3, 4),
(49.10, '2026-07-03 23:45:00', 0, 3, 3), (190.00, '2026-07-03 23:45:00', 0, 3, 4),
(38.50, '2026-07-03 23:55:00', 1, 3, 3), (140.00, '2026-07-03 23:55:00', 1, 3, 4), -- Caída de parámetros
(45.00, '2026-07-04 00:10:00', 0, 3, 3), (178.00, '2026-07-04 00:10:00', 0, 3, 4),
(96.20, '2026-07-01 09:00:00', 0, 1, 1), (14.10, '2026-07-01 09:00:00', 0, 1, 2),
(97.00, '2026-07-01 09:30:00', 0, 1, 1), (14.30, '2026-07-01 09:30:00', 0, 1, 2),
(95.80, '2026-07-01 10:00:00', 0, 1, 1), (14.00, '2026-07-01 10:00:00', 0, 1, 2),
(99.10, '2026-07-01 10:30:00', 0, 1, 1), (14.90, '2026-07-01 10:30:00', 0, 1, 2);
GO

-- ============================================================
-- 18. GRAN VOLUMEN: CURVAS DE TAMICES / GRANULOMETRÍA (24 filas)
-- Mapea la distribución de finos por mallas estandarizadas.
-- ============================================================
INSERT INTO sieve_analysis (mesh_number, weight_retained, percentage_passing, id_analysis) VALUES
('Malla 10', 12.50, 97.50, 1), ('Malla 40', 45.20, 88.46, 1), 
('Malla 100', 120.30, 64.40, 1), ('Malla 200', 185.00, 27.40, 1),
('Malla 325', 65.40, 14.32, 1), ('Fondo', 71.60, 0.00, 1),
('Malla 10', 15.10, 96.98, 2), ('Malla 40', 50.80, 86.82, 2), 
('Malla 100', 135.00, 59.82, 2), ('Malla 200', 190.20, 21.78, 2),
('Malla 325', 55.00, 10.78, 2), ('Fondo', 53.90, 0.00, 2),
('Malla 10', 10.20, 97.96, 3), ('Malla 40', 41.00, 89.76, 3), 
('Malla 100', 115.40, 66.68, 3), ('Malla 200', 178.60, 30.96, 3),
('Malla 325', 70.10, 16.94, 3), ('Fondo', 84.70, 0.00, 3),
('Malla 10', 11.00, 97.80, 1), ('Malla 40', 43.00, 89.20, 1),
('Malla 100', 118.00, 65.60, 2), ('Malla 200', 180.00, 29.60, 2),
('Malla 325', 68.00, 16.00, 3), ('Fondo', 80.00, 0.00, 3);
GO

-- 19. AUDITORÍA DE ACCIONES INTERNAS (5 filas)
INSERT INTO audit_log (affected_table, operation_type, old_value, new_value, action_timestamp, record_source, id_worker) VALUES
('operation_equipment', 'UPDATE', 'status: Operativo', 'status: Mantenimiento', '2026-07-02 06:15:00', 'SCADA_App', 3),
('mineral_batch', 'INSERT', 'NULL', 'id_batch: 3, batch_code: LOT-20260703-C', '2026-07-03 14:10:00', 'Planta_Web', 1),
('laboratory_analysis', 'INSERT', 'NULL', 'id_analysis: 1, analysis_code: REP-LAB-001', '2026-07-01 14:30:00', 'Lab_System', 2),
('worker', 'UPDATE', 'email: jorge.h@upc.edu.pe', 'email: jorge.huaman@minedata.pe', '2026-07-01 09:00:00', 'RRHH_Module', 3),
('operation_equipment', 'UPDATE', 'status: Mantenimiento', 'status: Operativo', '2026-07-03 18:00:00', 'SCADA_App', 3);
GO
