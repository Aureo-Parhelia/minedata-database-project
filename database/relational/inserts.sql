-- ============================================================
-- SCRIPT DML: INSERCIÓN DE DATOS DE PRUEBA REALISTAS (MINEDATA)
-- ============================================================

use MINEDATA
go

/*INSERCION DE DATOS*/
/* 1. DEPARTMENT*/
INSERT INTO department (department_name, department_description) VALUES
('Operaciones Mina',       'Departamento encargado de la extraccion y transporte del mineral'),
('Planta Concentradora',   'Departamento de procesamiento y concentracion del mineral'),
('Laboratorio Metalurgico','Departamento de analisis quimico y control de calidad'),
('Mantenimiento',          'Departamento de mantenimiento de equipos e instalaciones'),
('Seguridad y Medio Ambiente', 'Departamento de gestion ambiental y seguridad industrial')
GO

/*2. POSITION*/

INSERT INTO position (position_name, position_description, id_department) VALUES
('Operador de Planta',     'Operacion de equipos en planta concentradora',              2),
('Supervisor de Turno',    'Supervision de operaciones durante el turno asignado',      2),
('Analista de Laboratorio','Realizacion de analisis quimicos y metalurgicos',           3),
('Tecnico de Mantenimiento','Mantenimiento preventivo y correctivo de equipos',         4),
('Ingeniero de Proceso',   'Optimizacion y control de procesos metalurgicos',           2),
('Jefe de Planta',         'Gestion y coordinacion general de la planta concentradora', 2),
('Operador de Mina',       'Extraccion y carguio del mineral en cancha',                1),
('Especialista Ambiental', 'Monitoreo de impacto ambiental y relaves',                  5)
GO


/* 3. WORK_SHIFT*/
INSERT INTO work_shift (shift_name, start_time, end_time) VALUES
('Turno Dia',    '07:00:00', '19:00:00'),
('Turno Noche',  '19:00:00', '07:00:00'),
('Turno Manana', '06:00:00', '14:00:00')
GO


/*4. WORKER */
INSERT INTO worker (identity_document, first_name, last_name, email, id_position) VALUES
('12345678', 'Carlos',   'Mamani Quispe',   'c.mamani@minedata.pe',   1),
('23456789', 'Rosa',     'Flores Condori',  'r.flores@minedata.pe',    2),
('34567890', 'Jorge',    'Huanca Apaza',    'j.huanca@minedata.pe',    3),
('45678901', 'Lucia',    'Vargas Torres',   'l.vargas@minedata.pe',    3),
('56789012', 'Miguel',   'Quispe Larico',   'm.quispe@minedata.pe',    4),
('67890123', 'Ana',      'Coaquira Lima',   'a.coaquira@minedata.pe',  5),
('78901234', 'Pedro',    'Calla Ramos',     'p.calla@minedata.pe',     6),
('89012345', 'Elena',    'Tapara Churata',  'e.tapara@minedata.pe',    1),
('90123456', 'Ramon',    'Ticona Cutipa',   'r.ticona@minedata.pe',    7),
('01234567', 'Patricia', 'Llanos Mendoza',  'p.llanos@minedata.pe',    8)
GO


/*5. PROCESS_STAGE */

INSERT INTO process_stage (stage_name, stage_description) VALUES
('Trituracion Primaria',  'Reduccion de tamano de la roca bruta mediante mandibulas'),
('Trituracion Secundaria','Segunda etapa de reduccion granulometrica del mineral'),
('Molienda',              'Pulverizacion fina del mineral en molinos de bolas'),
('Clasificacion',         'Separacion por tamano de particula via ciclones y mallas'),
('Flotacion',             'Separacion del mineral valioso de la ganga mediante burbujas'),
('Espesamiento',          'Reduccion del contenido de agua en el concentrado'),
('Filtracion',            'Obtencion del concentrado seco para despacho')
GO



/* 6. OPERATION_EQUIPMENT*/
INSERT INTO operation_equipment (equipment_code, equipment_name, status) VALUES
('EQ-001', 'Chancadora de Mandibula C110',       'active'),
('EQ-002', 'Chancadora Conica HP300',             'active'),
('EQ-003', 'Molino de Bolas 14x18',               'active'),
('EQ-004', 'Clasificador de Espiral FG-12',       'active'),
('EQ-005', 'Celda de Flotacion IF-300',           'active'),
('EQ-006', 'Celda de Flotacion IF-300 B',         'maintenance'),
('EQ-007', 'Espesador de Alta Densidad 18m',      'active'),
('EQ-008', 'Filtro de Discos FD-60',              'active'),
('EQ-009', 'Chancadora de Mandibula C80 (Resp.)', 'inactive'),
('EQ-010', 'Molino de Bolas 12x14 (Resp.)',       'inactive')
GO

/* 7. EQUIPMENT_STAGE*/
INSERT INTO equipment_stage (id_equipment, id_stage) VALUES
(1, 1), -- Chancadora Mandibula → Trituracion Primaria
(2, 2), -- Chancadora Conica    → Trituracion Secundaria
(3, 3), -- Molino de Bolas      → Molienda
(4, 4), -- Clasificador         → Clasificacion
(5, 5), -- Celda Flotacion A    → Flotacion
(6, 5), -- Celda Flotacion B    → Flotacion
(7, 6), -- Espesador            → Espesamiento
(8, 7), -- Filtro de Discos     → Filtracion
(9, 1), -- Chancadora Resp.     → Trituracion Primaria
(10,3)  -- Molino Resp.         → Molienda
GO


/* 8. PROCESS_PARAMETER*/
INSERT INTO process_parameter (parameter_name, unit_of_measure, min_value, max_value, id_stage) VALUES
('Tamano de Particula D80',   'mm',   10.00, 25.00,  1),
('Tamano de Particula D80',   'mm',    5.00, 12.00,  2),
('Granulometria Malla 200',   '%',    60.00, 85.00,  3),
('Densidad de Pulpa',         'g/cm3', 1.25,  1.45,  3),
('Eficiencia de Clasificacion','%',   70.00, 95.00,  4),
('pH de Pulpa',               'pH',    8.50, 11.50,  5),
('Densidad de Pulpa Flotacion','g/cm3',1.10,  1.30,  5),
('Flujo de Aire',             'm3/min',2.50,  6.00,  5),
('Dosis Colector (Z-11)',     'g/t',  15.00, 35.00,  5),
('Dosis Espumante (MIBC)',    'g/t',   5.00, 15.00,  5),
('Densidad Concentrado',      'g/cm3', 1.50,  1.80,  6),
('Humedad Concentrado Final', '%',     8.00, 12.00,  7)
GO

/* 9. GANGA*/

INSERT INTO ganga (entry_date, description, origin_zone, total_weight_tons) VALUES
('2021-03-10', 'Ganga de cuarzo y silice zona norte',       'Zona Norte TJ-01',  1250.50),
('2021-08-22', 'Material esteril con presencia de oxidos',  'Zona Este TJ-02',   980.00),
('2022-01-15', 'Ganga arcillosa con bajo contenido cuprico','Zona Sur TJ-03',    1540.75),
('2022-06-30', 'Material esteril trituracion secundaria',   'Zona Norte TJ-01',  870.25),
('2022-11-05', 'Ganga de caliza zona central',              'Zona Central TJ-04',2100.00),
('2023-02-18', 'Esteril con presencia de pirita',           'Zona Este TJ-02',   1320.60),
('2023-07-14', 'Ganga siliceo-arcillosa',                   'Zona Sur TJ-03',    990.30),
('2023-12-01', 'Material esteril zona norte temporada seca','Zona Norte TJ-01',  1750.00),
('2024-03-25', 'Ganga con oxidos de hierro',                'Zona Central TJ-04',1100.45),
('2024-08-09', 'Esteril de baja ley zona este',             'Zona Este TJ-02',   880.90)
GO


-- ============================================================
-- 10. MINERAL_RECEPTION
-- ============================================================
INSERT INTO mineral_reception (reception_date, total_weight_tons, id_ganga) VALUES
('2021-03-10 08:00:00', 3500.00, 1),
('2021-08-22 07:30:00', 2800.00, 2),
('2022-01-15 08:15:00', 4200.00, 3),
('2022-06-30 06:45:00', 3100.00, 4),
('2022-11-05 08:00:00', 5000.00, 5),
('2023-02-18 07:00:00', 3800.00, 6),
('2023-07-14 08:30:00', 2950.00, 7),
('2023-12-01 07:15:00', 4600.00, 8),
('2024-03-25 08:00:00', 3300.00, 9),
('2024-08-09 06:30:00', 2700.00, 10)
GO


/* 9. GANGA*/
-- ============================================================
-- 11. MINERAL_BATCH
-- ============================================================
INSERT INTO mineral_batch (batch_code, batch_weight_tons, entry_status, id_reception) VALUES
('LOTE-2021-001', 1750.00, 'Processed',    1),
('LOTE-2021-002', 1750.00, 'Processed',    1),
('LOTE-2021-003', 2800.00, 'Processed',    2),
('LOTE-2022-001', 2100.00, 'Processed',    3),
('LOTE-2022-002', 2100.00, 'Processed',    3),
('LOTE-2022-003', 3100.00, 'Processed',    4),
('LOTE-2022-004', 2500.00, 'Processed',    5),
('LOTE-2022-005', 2500.00, 'Processed',    5),
('LOTE-2023-001', 1900.00, 'Processed',    6),
('LOTE-2023-002', 1900.00, 'Processed',    6),
('LOTE-2023-003', 2950.00, 'Processed',    7),
('LOTE-2023-004', 2300.00, 'Processed',    8),
('LOTE-2023-005', 2300.00, 'In Processed',   8),
('LOTE-2024-001', 3300.00, 'In Processed',   9),
('LOTE-2024-002', 2700.00, 'Pending',      10)
GO

-- ============================================================
-- 12. METALLURGICAL_PROCESS
-- Cada lote pasa por varias etapas (id_stage via equipment)
-- ============================================================

/* 9. GANGA*/
INSERT INTO metallurgical_process (start_date_time, end_date_time, id_batch, id_worker, id_shift, id_equipment) VALUES
-- LOTE 2021-001: Trituracion → Molienda → Flotacion
('2021-03-11 07:00:00', '2021-03-11 11:30:00', 1, 1, 1, 1),
('2021-03-11 12:00:00', '2021-03-11 18:00:00', 1, 1, 1, 3),
('2021-03-12 07:00:00', '2021-03-12 15:00:00', 1, 8, 1, 5),
-- LOTE 2021-002
('2021-04-05 07:00:00', '2021-04-05 11:00:00', 2, 8, 1, 1),
('2021-04-05 12:00:00', '2021-04-05 19:00:00', 2, 1, 1, 3),
('2021-04-06 07:00:00', '2021-04-06 16:00:00', 2, 8, 1, 5),
-- LOTE 2022-001
('2022-01-16 07:00:00', '2022-01-16 12:00:00', 4, 1, 1, 1),
('2022-01-16 13:00:00', '2022-01-16 19:00:00', 4, 8, 1, 3),
('2022-01-17 07:00:00', '2022-01-17 17:00:00', 4, 1, 1, 5),
-- LOTE 2022-004
('2022-11-06 19:00:00', '2022-11-07 01:00:00', 7, 8, 2, 2),
('2022-11-07 01:30:00', '2022-11-07 07:00:00', 7, 8, 2, 3),
('2022-11-07 07:00:00', '2022-11-07 16:00:00', 7, 1, 1, 5),
-- LOTE 2023-001
('2023-02-19 07:00:00', '2023-02-19 13:00:00', 9, 1, 1, 1),
('2023-02-19 14:00:00', '2023-02-19 19:00:00', 9, 8, 1, 3),
('2023-02-20 07:00:00', '2023-02-20 17:30:00', 9, 1, 1, 5),
-- LOTE 2023-003
('2023-07-15 19:00:00', '2023-07-16 01:00:00', 11, 8, 2, 1),
('2023-07-16 01:30:00', '2023-07-16 07:00:00', 11, 8, 2, 3),
('2023-07-16 08:00:00', '2023-07-16 18:00:00', 11, 6, 1, 5),
-- LOTE 2023-004
('2023-12-02 07:00:00', '2023-12-02 12:00:00', 12, 1, 1, 2),
('2023-12-02 13:00:00', '2023-12-02 19:00:00', 12, 8, 1, 3),
('2023-12-03 07:00:00', '2023-12-03 17:00:00', 12, 1, 1, 5),
-- LOTE 2024-001
('2024-03-26 07:00:00', '2024-03-26 13:00:00', 14, 1, 1, 1),
('2024-03-26 14:00:00', '2024-03-26 19:30:00', 14, 8, 1, 3),
('2024-03-27 07:00:00', '2024-03-27 18:00:00', 14, 6, 1, 5)
GO

-- ============================================================
-- 13. PROCESS_MEASUREMENT
-- Valores medidos en cada proceso
-- ============================================================

/* 9. GANGA*/
INSERT INTO process_measurement (recorded_value, measurement_time, is_out_range, id_process, id_parameter) VALUES
-- Proceso 1 (Trituracion lote 2021-001) - Tamano particula
(18.50, '2021-03-11 09:00:00', 0, 1,  1),
(21.00, '2021-03-11 10:30:00', 0, 1,  1),
-- Proceso 2 (Molienda lote 2021-001) - Granulometria y densidad
(72.30, '2021-03-11 14:00:00', 0, 2,  3),
(1.32,  '2021-03-11 16:00:00', 0, 2,  4),
-- Proceso 3 (Flotacion lote 2021-001) - pH, aire, reactivos
(9.80,  '2021-03-12 08:30:00', 0, 3,  6),
(1.18,  '2021-03-12 09:00:00', 0, 3,  7),
(4.20,  '2021-03-12 10:00:00', 0, 3,  8),
(25.00, '2021-03-12 08:00:00', 0, 3,  9),
(9.50,  '2021-03-12 08:00:00', 0, 3, 10),
-- Proceso 7 (Trituracion lote 2022-001)
(20.10, '2022-01-16 09:30:00', 0, 7,  1),
-- Proceso 8 (Molienda lote 2022-001)
(68.50, '2022-01-16 15:00:00', 0, 8,  3),
(1.28,  '2022-01-16 17:00:00', 0, 8,  4),
-- Proceso 9 (Flotacion lote 2022-001) - pH fuera de rango
(11.80, '2022-01-17 09:00:00', 1, 9,  6),
(1.22,  '2022-01-17 10:00:00', 0, 9,  7),
(5.10,  '2022-01-17 11:00:00', 0, 9,  8),
-- Proceso 15 (Flotacion lote 2023-001)
(10.20, '2023-02-20 09:00:00', 0, 15, 6),
(1.25,  '2023-02-20 09:30:00', 0, 15, 7),
(3.80,  '2023-02-20 10:00:00', 0, 15, 8),
(28.00, '2023-02-20 08:30:00', 0, 15, 9),
(10.00, '2023-02-20 08:30:00', 0, 15, 10),
-- Proceso 21 (Flotacion lote 2023-004)
(9.50,  '2023-12-03 09:00:00', 0, 21, 6),
(1.20,  '2023-12-03 09:30:00', 0, 21, 7),
(4.50,  '2023-12-03 10:00:00', 0, 21, 8),
-- Proceso 24 (Flotacion lote 2024-001)
(10.00, '2024-03-27 09:00:00', 0, 24, 6),
(1.15,  '2024-03-27 09:30:00', 0, 24, 7),
(13.50, '2024-03-27 09:00:00', 1, 24, 10) -- Espumante fuera de rango
GO

-- ============================================================
-- 14. MINERAL_SAMPLE
-- ============================================================
INSERT INTO mineral_sample (sample_code, extraction_date, id_batch) VALUES
('MUS-2021-001', '2021-03-12 10:00:00', 1),
('MUS-2021-002', '2021-03-12 14:00:00', 1),
('MUS-2021-003', '2021-04-06 10:00:00', 2),
('MUS-2022-001', '2022-01-17 10:00:00', 4),
('MUS-2022-002', '2022-01-17 14:00:00', 4),
('MUS-2022-003', '2022-11-07 11:00:00', 7),
('MUS-2023-001', '2023-02-20 10:00:00', 9),
('MUS-2023-002', '2023-02-20 14:00:00', 9),
('MUS-2023-003', '2023-07-16 11:00:00', 11),
('MUS-2023-004', '2023-12-03 10:00:00', 12),
('MUS-2023-005', '2023-12-03 14:00:00', 12),
('MUS-2024-001', '2024-03-27 10:00:00', 14),
('MUS-2024-002', '2024-03-27 14:30:00', 14)
GO

-- ============================================================
-- 15. LABORATORY_ANALYSIS
-- ============================================================
INSERT INTO laboratory_analysis (analysis_code, mineral_grade_porcentage, analysis_date, status, id_sample) VALUES
('ANA-2021-001', 28.50, '2021-03-13 09:00:00', 'approved',  1),
('ANA-2021-002', 27.80, '2021-03-13 11:00:00', 'approved',  2),
('ANA-2021-003', 29.10, '2021-04-07 09:00:00', 'approved',  3),
('ANA-2022-001', 31.20, '2022-01-18 09:00:00', 'approved',  4),
('ANA-2022-002', 29.70, '2022-01-18 11:30:00', 'approved',  5),
('ANA-2022-003', 24.50, '2022-11-08 09:00:00', 'rejected',  6),
('ANA-2023-001', 33.80, '2023-02-21 09:00:00', 'approved',  7),
('ANA-2023-002', 34.10, '2023-02-21 11:00:00', 'approved',  8),
('ANA-2023-003', 30.60, '2023-07-17 09:00:00', 'approved',  9),
('ANA-2023-004', 32.40, '2023-12-04 09:00:00', 'approved', 10),
('ANA-2023-005', 31.90, '2023-12-04 11:30:00', 'approved', 11),
('ANA-2024-001', 35.20, '2024-03-28 09:00:00', 'approved', 12),
('ANA-2024-002', 34.80, '2024-03-28 11:00:00', 'approved', 13)
GO

-- ============================================================
-- 16. SIEVE_ANALYSIS
-- ============================================================
INSERT INTO sieve_analysis (mesh_number, weight_retained, percentage_passing, id_analysis) VALUES
('#10',  12.50, 98.20,  1),
('#35',  45.80, 86.50,  1),
('#100', 98.30, 62.40,  1),
('#200', 124.10,12.80,  1),
('#10',  11.90, 97.80,  4),
('#35',  44.20, 85.90,  4),
('#100', 96.50, 61.20,  4),
('#200', 122.30,13.50,  4),
('#10',  10.80, 98.50,  7),
('#35',  43.10, 87.20,  7),
('#100', 95.20, 63.10,  7),
('#200', 119.80,11.90,  7),
('#10',  13.20, 97.50, 10),
('#35',  46.50, 85.10, 10),
('#100', 99.80, 60.80, 10),
('#200', 125.60,13.20, 10),
('#10',  11.50, 98.10, 12),
('#35',  44.80, 86.70, 12),
('#100', 97.10, 62.90, 12),
('#200', 121.40,12.30, 12)
GO

-- ============================================================
-- 17. CONCENTRATE
-- ============================================================
INSERT INTO concentrate (purity_percentage, weight_tons, id_process) VALUES
(28.50,  420.50,  3),
(29.10,  410.20,  6),
(31.20,  530.80,  9),
(24.50,  380.00, 12),
(33.80,  460.50, 15),
(30.60,  415.30, 18),
(32.40,  498.70, 21),
(35.20,  520.10, 24)
GO

-- ============================================================
-- 18. TAILINGS
-- ============================================================
INSERT INTO tailings (toxicity_level, weight_tons, id_process) VALUES
('low',    1280.50,  3),
('low',    1290.80,  6),
('medium', 1520.20,  9),
('medium', 2050.00, 12),
('low',    1390.50, 15),
('low',    2480.70, 18),
('low',    1751.30, 21),
('low',    2729.90, 24)
GO

-- ============================================================
-- 19. AUDIT_LOG
-- ============================================================
INSERT INTO audit_log (affected_table, operation_type, old_value, new_value, action_timestamp, record_source, id_worker) VALUES
('mineral_batch',        'UPDATE', 'entry_status: pending',    'entry_status: in_process',  '2021-03-11 07:05:00', 'sistema_planta', 2),
('mineral_batch',        'UPDATE', 'entry_status: in_process', 'entry_status: processed',   '2021-03-12 16:00:00', 'sistema_planta', 2),
('laboratory_analysis',  'INSERT', 'NULL',                     'id_analysis: 1',            '2021-03-13 09:05:00', 'sistema_lab',    3),
('quality_control',      'INSERT', 'NULL',                     'id_analysis: 6 rejected',   '2022-11-09 10:00:00', 'sistema_lab',    4),
('process_measurement',  'INSERT', 'NULL',                     'pH: 11.80 out_range: true', '2022-01-17 09:05:00', 'sistema_planta', 6),
('mineral_batch',        'UPDATE', 'entry_status: in_process', 'entry_status: processed',   '2023-02-20 18:00:00', 'sistema_planta', 2),
('laboratory_analysis',  'UPDATE', 'status: pending',          'status: approved',          '2023-12-04 12:00:00', 'sistema_lab',    3),
('process_measurement',  'INSERT', 'NULL',                     'espumante: 13.50 out_range',  '2024-03-27 09:05:00', 'sistema_planta', 6)
GO

-- ============================================================
-- === DATOS ADICIONALES 2024 (segundo semestre) - 2026 ===
-- ============================================================

-- ============================================================
-- GANGA 2024 (segundo semestre) - 2026
-- ============================================================
INSERT INTO ganga (entry_date, description, origin_zone, total_weight_tons) VALUES
('2024-10-12', 'Ganga cuarzosa con trazas de pirita zona norte',     'Zona Norte TJ-01',  1380.00),
('2025-02-03', 'Material esteril campaña verano zona sur',           'Zona Sur TJ-03',    2050.75),
('2025-05-19', 'Ganga arcillo-arenosa zona este campaña seca',       'Zona Este TJ-02',   1620.30),
('2025-08-27', 'Esteril con oxidos de manganeso zona central',       'Zona Central TJ-04',1890.00),
('2025-11-10', 'Ganga de caliza con silice zona norte',              'Zona Norte TJ-01',  2200.50),
('2026-01-20', 'Material esteril inicio campaña 2026 zona sur',      'Zona Sur TJ-03',    1750.80),
('2026-04-08', 'Ganga siliceo-ferruginosa zona este',                'Zona Este TJ-02',   1430.60),
('2026-06-15', 'Esteril con presencia de arcillas zona central',     'Zona Central TJ-04',1960.20)
GO

-- ============================================================
-- MINERAL_RECEPTION 2024 (segundo semestre) - 2026
-- ============================================================
INSERT INTO mineral_reception (reception_date, total_weight_tons, id_ganga) VALUES
('2024-10-12 07:00:00', 3850.00, 11),
('2025-02-03 08:00:00', 4700.00, 12),
('2025-05-19 07:30:00', 3600.00, 13),
('2025-08-27 08:15:00', 4100.00, 14),
('2025-11-10 07:00:00', 5200.00, 15),
('2026-01-20 08:00:00', 3950.00, 16),
('2026-04-08 07:45:00', 4300.00, 17),
('2026-06-15 07:00:00', 3750.00, 18)
GO

-- ============================================================
-- MINERAL_BATCH 2024 (segundo semestre) - 2026
-- ============================================================
INSERT INTO mineral_batch (batch_code, batch_weight_tons, entry_status, id_reception) VALUES
('LOTE-2024-003', 1925.00, 'processed',  11),
('LOTE-2024-004', 1925.00, 'processed',  11),
('LOTE-2025-001', 2350.00, 'processed',  12),
('LOTE-2025-002', 2350.00, 'processed',  12),
('LOTE-2025-003', 3600.00, 'processed',  13),
('LOTE-2025-004', 2050.00, 'processed',  14),
('LOTE-2025-005', 2050.00, 'processed',  14),
('LOTE-2025-006', 2600.00, 'processed',  15),
('LOTE-2025-007', 2600.00, 'in_process', 15),
('LOTE-2026-001', 3950.00, 'processed',  16),
('LOTE-2026-002', 2150.00, 'processed',  17),
('LOTE-2026-003', 2150.00, 'in_process', 17),
('LOTE-2026-004', 3750.00, 'pending',    18)
GO

-- ============================================================
-- METALLURGICAL_PROCESS 2024 (segundo semestre) - 2026
-- id_batch continuacion: lotes 16 al 28 (IDENTITY desde 16)
-- ============================================================
INSERT INTO metallurgical_process (start_date_time, end_date_time, id_batch, id_worker, id_shift, id_equipment) VALUES
-- LOTE-2024-003 (id_batch=16)
('2024-10-13 07:00:00', '2024-10-13 12:30:00', 16, 1, 1, 1),
('2024-10-13 13:00:00', '2024-10-13 19:00:00', 16, 8, 1, 3),
('2024-10-14 07:00:00', '2024-10-14 17:30:00', 16, 6, 1, 5),
-- LOTE-2024-004 (id_batch=17)
('2024-11-05 19:00:00', '2024-11-06 01:00:00', 17, 8, 2, 2),
('2024-11-06 01:30:00', '2024-11-06 07:00:00', 17, 8, 2, 3),
('2024-11-06 07:00:00', '2024-11-06 18:00:00', 17, 1, 1, 5),
-- LOTE-2025-001 (id_batch=18)
('2025-02-04 07:00:00', '2025-02-04 12:00:00', 18, 1, 1, 1),
('2025-02-04 13:00:00', '2025-02-04 19:30:00', 18, 8, 1, 3),
('2025-02-05 07:00:00', '2025-02-05 17:00:00', 18, 6, 1, 5),
-- LOTE-2025-002 (id_batch=19)
('2025-03-10 19:00:00', '2025-03-11 01:30:00', 19, 8, 2, 2),
('2025-03-11 02:00:00', '2025-03-11 07:00:00', 19, 8, 2, 3),
('2025-03-11 07:00:00', '2025-03-11 17:30:00', 19, 1, 1, 5),
-- LOTE-2025-003 (id_batch=20)
('2025-05-20 07:00:00', '2025-05-20 13:00:00', 20, 1, 1, 1),
('2025-05-20 14:00:00', '2025-05-20 19:00:00', 20, 8, 1, 3),
('2025-05-21 07:00:00', '2025-05-21 18:00:00', 20, 6, 1, 5),
-- LOTE-2025-004 (id_batch=21)
('2025-08-28 07:00:00', '2025-08-28 12:30:00', 21, 8, 1, 1),
('2025-08-28 13:00:00', '2025-08-28 19:00:00', 21, 1, 1, 3),
('2025-08-29 07:00:00', '2025-08-29 17:00:00', 21, 6, 1, 5),
-- LOTE-2025-006 (id_batch=23)
('2025-11-11 19:00:00', '2025-11-12 01:00:00', 23, 8, 2, 2),
('2025-11-12 01:30:00', '2025-11-12 07:00:00', 23, 8, 2, 3),
('2025-11-12 07:30:00', '2025-11-12 18:30:00', 23, 1, 1, 5),
-- LOTE-2026-001 (id_batch=25)
('2026-01-21 07:00:00', '2026-01-21 13:00:00', 25, 1, 1, 1),
('2026-01-21 14:00:00', '2026-01-21 19:30:00', 25, 8, 1, 3),
('2026-01-22 07:00:00', '2026-01-22 18:00:00', 25, 6, 1, 5),
-- LOTE-2026-002 (id_batch=26)
('2026-04-09 07:00:00', '2026-04-09 12:00:00', 26, 1, 1, 2),
('2026-04-09 13:00:00', '2026-04-09 19:00:00', 26, 8, 1, 3),
('2026-04-10 07:00:00', '2026-04-10 17:30:00', 26, 6, 1, 5)
GO

-- ============================================================
-- PROCESS_MEASUREMENT 2024 (segundo semestre) - 2026
-- id_process continua desde 25
-- ============================================================
INSERT INTO process_measurement (recorded_value, measurement_time, is_out_range, id_process, id_parameter) VALUES
-- Proceso 25 (Trituracion LOTE-2024-003)
(19.80, '2024-10-13 09:00:00', 0, 25, 1),
(22.10, '2024-10-13 11:00:00', 0, 25, 1),
-- Proceso 26 (Molienda LOTE-2024-003)
(75.40, '2024-10-13 15:00:00', 0, 26, 3),
(1.30,  '2024-10-13 17:00:00', 0, 26, 4),
-- Proceso 27 (Flotacion LOTE-2024-003)
(10.10, '2024-10-14 09:00:00', 0, 27, 6),
(1.22,  '2024-10-14 09:30:00', 0, 27, 7),
(4.80,  '2024-10-14 10:00:00', 0, 27, 8),
(26.50, '2024-10-14 08:30:00', 0, 27, 9),
(10.50, '2024-10-14 08:30:00', 0, 27, 10),
-- Proceso 30 (Flotacion LOTE-2024-004)
(9.20,  '2024-11-06 09:00:00', 0, 30, 6),
(1.19,  '2024-11-06 09:30:00', 0, 30, 7),
(5.50,  '2024-11-06 10:00:00', 0, 30, 8),
-- Proceso 33 (Flotacion LOTE-2025-001)
(10.50, '2025-02-05 09:00:00', 0, 33, 6),
(1.28,  '2025-02-05 09:30:00', 0, 33, 7),
(4.20,  '2025-02-05 10:00:00', 0, 33, 8),
(30.00, '2025-02-05 08:30:00', 0, 33, 9),
(11.00, '2025-02-05 08:30:00', 0, 33, 10),
-- Proceso 36 (Flotacion LOTE-2025-002) - densidad fuera de rango
(9.80,  '2025-03-11 09:00:00', 0, 36, 6),
(1.48,  '2025-03-11 09:30:00', 1, 36, 7),  -- Densidad 1.48 > max 1.30
(4.90,  '2025-03-11 10:00:00', 0, 36, 8),
-- Proceso 39 (Flotacion LOTE-2025-003)
(10.80, '2025-05-21 09:00:00', 0, 39, 6),
(1.24,  '2025-05-21 09:30:00', 0, 39, 7),
(3.90,  '2025-05-21 10:00:00', 0, 39, 8),
(27.00, '2025-05-21 08:30:00', 0, 39, 9),
(9.80,  '2025-05-21 08:30:00', 0, 39, 10),
-- Proceso 42 (Flotacion LOTE-2025-004)
(11.20, '2025-08-29 09:00:00', 0, 42, 6),
(1.18,  '2025-08-29 09:30:00', 0, 42, 7),
(5.20,  '2025-08-29 10:00:00', 0, 42, 8),
-- Proceso 45 (Flotacion LOTE-2025-006)
(9.60,  '2025-11-12 09:00:00', 0, 45, 6),
(1.26,  '2025-11-12 09:30:00', 0, 45, 7),
(4.60,  '2025-11-12 10:00:00', 0, 45, 8),
(32.00, '2025-11-12 08:30:00', 0, 45, 9),
(12.00, '2025-11-12 08:30:00', 0, 45, 10),
-- Proceso 48 (Flotacion LOTE-2026-001)
(10.30, '2026-01-22 09:00:00', 0, 48, 6),
(1.21,  '2026-01-22 09:30:00', 0, 48, 7),
(4.40,  '2026-01-22 10:00:00', 0, 48, 8),
(29.00, '2026-01-22 08:30:00', 0, 48, 9),
(10.00, '2026-01-22 08:30:00', 0, 48, 10),
-- Proceso 51 (Flotacion LOTE-2026-002) - pH ligeramente alto
(11.60, '2026-04-10 09:00:00', 1, 51, 6),  -- pH 11.60 > max 11.50
(1.25,  '2026-04-10 09:30:00', 0, 51, 7),
(4.70,  '2026-04-10 10:00:00', 0, 51, 8),
(31.00, '2026-04-10 08:30:00', 0, 51, 9),
(11.50, '2026-04-10 08:30:00', 0, 51, 10)
GO

-- ============================================================
-- MINERAL_SAMPLE 2024 (segundo semestre) - 2026
-- ============================================================
INSERT INTO mineral_sample (sample_code, extraction_date, id_batch) VALUES
('MUS-2024-003', '2024-10-14 10:30:00', 16),
('MUS-2024-004', '2024-10-14 14:00:00', 16),
('MUS-2024-005', '2024-11-06 11:00:00', 17),
('MUS-2025-001', '2025-02-05 10:00:00', 18),
('MUS-2025-002', '2025-02-05 14:30:00', 18),
('MUS-2025-003', '2025-03-11 10:30:00', 19),
('MUS-2025-004', '2025-05-21 10:00:00', 20),
('MUS-2025-005', '2025-05-21 14:00:00', 20),
('MUS-2025-006', '2025-08-29 10:30:00', 21),
('MUS-2025-007', '2025-11-12 10:00:00', 23),
('MUS-2025-008', '2025-11-12 14:30:00', 23),
('MUS-2026-001', '2026-01-22 10:00:00', 25),
('MUS-2026-002', '2026-01-22 14:30:00', 25),
('MUS-2026-003', '2026-04-10 10:00:00', 26),
('MUS-2026-004', '2026-04-10 14:30:00', 26)
GO

-- ============================================================
-- LABORATORY_ANALYSIS 2024 (segundo semestre) - 2026
-- id_sample continua desde 14
-- ============================================================
INSERT INTO laboratory_analysis (analysis_code, mineral_grade_porcentage, analysis_date, status, id_sample) VALUES
('ANA-2024-003', 34.60, '2024-10-15 09:00:00', 'approved', 14),
('ANA-2024-004', 33.90, '2024-10-15 11:30:00', 'approved', 15),
('ANA-2024-005', 22.30, '2024-11-07 09:00:00', 'rejected', 16),
('ANA-2025-001', 36.10, '2025-02-06 09:00:00', 'approved', 17),
('ANA-2025-002', 35.80, '2025-02-06 11:00:00', 'approved', 18),
('ANA-2025-003', 29.40, '2025-03-12 09:00:00', 'approved', 19),
('ANA-2025-004', 37.20, '2025-05-22 09:00:00', 'approved', 20),
('ANA-2025-005', 36.90, '2025-05-22 11:30:00', 'approved', 21),
('ANA-2025-006', 34.50, '2025-08-30 09:00:00', 'approved', 22),
('ANA-2025-007', 38.10, '2025-11-13 09:00:00', 'approved', 23),
('ANA-2025-008', 37.80, '2025-11-13 11:00:00', 'approved', 24),
('ANA-2026-001', 36.40, '2026-01-23 09:00:00', 'approved', 25),
('ANA-2026-002', 35.90, '2026-01-23 11:30:00', 'approved', 26),
('ANA-2026-003', 37.60, '2026-04-11 09:00:00', 'approved', 27),
('ANA-2026-004', 37.10, '2026-04-11 11:00:00', 'approved', 28)
GO

-- ============================================================
-- SIEVE_ANALYSIS 2024 (segundo semestre) - 2026
-- id_analysis continua desde 14
-- ============================================================
INSERT INTO sieve_analysis (mesh_number, weight_retained, percentage_passing, id_analysis) VALUES
('#10',  11.20, 98.30, 14),
('#35',  44.50, 86.10, 14),
('#100', 96.80, 62.70, 14),
('#200', 120.90,12.60, 14),
('#10',  12.10, 97.90, 17),
('#35',  45.30, 85.80, 17),
('#100', 97.60, 61.50, 17),
('#200', 122.80,13.10, 17),
('#10',  10.50, 98.60, 20),
('#35',  43.80, 87.40, 20),
('#100', 95.90, 63.80, 20),
('#200', 120.10,11.70, 20),
('#10',  11.80, 98.00, 23),
('#35',  45.10, 86.30, 23),
('#100', 97.30, 62.20, 23),
('#200', 121.90,12.90, 23),
('#10',  10.90, 98.40, 25),
('#35',  43.50, 87.10, 25),
('#100', 95.60, 63.50, 25),
('#200', 119.50,12.00, 25)
GO

-- ============================================================
-- CONCENTRATE 2024 (segundo semestre) - 2026
-- id_process de los procesos de flotacion nuevos
-- ============================================================
INSERT INTO concentrate (purity_percentage, weight_tons, id_process) VALUES
(34.60, 535.20, 27),
(33.90, 510.80, 30),
(36.10, 580.40, 33),
(29.40, 490.60, 36),
(37.20, 620.30, 39),
(34.50, 505.70, 42),
(38.10, 645.90, 45),
(36.40, 595.20, 48),
(37.60, 610.50, 51)
GO

-- ============================================================
-- TAILINGS 2024 (segundo semestre) - 2026
-- ============================================================
INSERT INTO tailings (toxicity_level, weight_tons, id_process) VALUES
('low',    1339.80, 27),
('medium', 1364.20, 30),
('low',    1719.60, 33),
('medium', 1509.40, 36),
('low',    2929.70, 39),
('low',    1494.30, 42),
('low',    1904.10, 45),
('low',    3304.80, 48),
('low',    1489.50, 51)
GO

-- ============================================================
-- AUDIT_LOG 2024 (segundo semestre) - 2026
-- ============================================================
INSERT INTO audit_log (affected_table, operation_type, old_value, new_value, action_timestamp, record_source, id_worker) VALUES
('mineral_batch',       'UPDATE', 'entry_status: pending',    'entry_status: in_process',    '2024-10-13 07:05:00', 'sistema_planta', 2),
('mineral_batch',       'UPDATE', 'entry_status: in_process', 'entry_status: processed',     '2024-10-14 18:00:00', 'sistema_planta', 2),
('laboratory_analysis', 'INSERT', 'NULL',                     'id_analysis: 16 rejected',    '2024-11-07 09:05:00', 'sistema_lab',    3),
('process_measurement', 'INSERT', 'NULL',                     'densidad: 1.48 out_range',    '2025-03-11 09:35:00', 'sistema_planta', 6),
('mineral_batch',       'UPDATE', 'entry_status: pending',    'entry_status: in_process',    '2025-05-20 07:05:00', 'sistema_planta', 2),
('mineral_batch',       'UPDATE', 'entry_status: in_process', 'entry_status: processed',     '2025-08-29 18:00:00', 'sistema_planta', 2),
('laboratory_analysis', 'UPDATE', 'status: pending',          'status: approved',            '2025-11-13 12:00:00', 'sistema_lab',    4),
('process_measurement', 'INSERT', 'NULL',                     'pH: 11.60 out_range: true',   '2026-04-10 09:05:00', 'sistema_planta', 6),
('mineral_batch',       'UPDATE', 'entry_status: pending',    'entry_status: in_process',    '2026-04-09 07:05:00', 'sistema_planta', 2),
('mineral_batch',       'INSERT', 'NULL',                     'LOTE-2026-004 registered',    '2026-06-15 08:00:00', 'sistema_planta', 2)
GO
