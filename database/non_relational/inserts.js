
// =========================================================================
// 1. INSERCIÓN DE DATOS EN LA COLECCIÓN: mineral_batch
// Combinación de: mineral_batch + mineral_reception + ganga
// =========================================================================
db.mineral_batch.insertMany([
  {
    "batch_code": "LOTE-2021-001",
    "batch_weight_tons": 1750.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "1", "description": "Ganga de cuarzo y silice zona norte" },
    "mineral_reception": { "id_reception": 1, "reception_date": "2021-03-10 08:00:00" }
  },
  {
    "batch_code": "LOTE-2021-002",
    "batch_weight_tons": 1750.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "1", "description": "Ganga de cuarzo y silice zona norte" },
    "mineral_reception": { "id_reception": 1, "reception_date": "2021-03-10 08:00:00" }
  },
  {
    "batch_code": "LOTE-2021-003",
    "batch_weight_tons": 2800.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "2", "description": "Material esteril con presencia de oxidos" },
    "mineral_reception": { "id_reception": 2, "reception_date": "2021-08-22 07:30:00" }
  },
  {
    "batch_code": "LOTE-2022-001",
    "batch_weight_tons": 2100.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "3", "description": "Ganga arcillosa con bajo contenido cuprico" },
    "mineral_reception": { "id_reception": 3, "reception_date": "2022-01-15 08:15:00" }
  },
  {
    "batch_code": "LOTE-2022-002",
    "batch_weight_tons": 2100.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "3", "description": "Ganga arcillosa con bajo contenido cuprico" },
    "mineral_reception": { "id_reception": 3, "reception_date": "2022-01-15 08:15:00" }
  },
  {
    "batch_code": "LOTE-2022-003",
    "batch_weight_tons": 3100.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "4", "description": "Material esteril trituracion secundaria" },
    "mineral_reception": { "id_reception": 4, "reception_date": "2022-06-30 06:45:00" }
  },
  {
    "batch_code": "LOTE-2022-004",
    "batch_weight_tons": 2500.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "5", "description": "Ganga de caliza zona central" },
    "mineral_reception": { "id_reception": 5, "reception_date": "2022-11-05 08:00:00" }
  },
  {
    "batch_code": "LOTE-2022-005",
    "batch_weight_tons": 2500.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "5", "description": "Ganga de caliza zona central" },
    "mineral_reception": { "id_reception": 5, "reception_date": "2022-11-05 08:00:00" }
  },
  {
    "batch_code": "LOTE-2023-001",
    "batch_weight_tons": 1900.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "6", "description": "Esteril con presencia de pirita" },
    "mineral_reception": { "id_reception": 6, "reception_date": "2023-02-18 07:00:00" }
  },
  {
    "batch_code": "LOTE-2023-002",
    "batch_weight_tons": 1900.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "6", "description": "Esteril con presencia de pirita" },
    "mineral_reception": { "id_reception": 6, "reception_date": "2023-02-18 07:00:00" }
  },
  {
    "batch_code": "LOTE-2023-003",
    "batch_weight_tons": 2950.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "7", "description": "Ganga siliceo-arcillosa" },
    "mineral_reception": { "id_reception": 7, "reception_date": "2023-07-14 08:30:00" }
  },
  {
    "batch_code": "LOTE-2023-004",
    "batch_weight_tons": 2300.00,
    "entry_status": "Processed",
    "ganga": { "id_ganga": "8", "description": "Material esteril zona norte temporada seca" },
    "mineral_reception": { "id_reception": 8, "reception_date": "2023-12-01 07:15:00" }
  },
  {
    "batch_code": "LOTE-2023-005",
    "batch_weight_tons": 2300.00,
    "entry_status": "In Processed",
    "ganga": { "id_ganga": "8", "description": "Material esteril zona norte temporada seca" },
    "mineral_reception": { "id_reception": 8, "reception_date": "2023-12-01 07:15:00" }
  },
  {
    "batch_code": "LOTE-2024-001",
    "batch_weight_tons": 3300.00,
    "entry_status": "In Processed",
    "ganga": { "id_ganga": "9", "description": "Ganga con oxidos de hierro" },
    "mineral_reception": { "id_reception": 9, "reception_date": "2024-03-25 08:00:00" }
  },
  {
    "batch_code": "LOTE-2024-002",
    "batch_weight_tons": 2700.00,
    "entry_status": "Pending",
    "ganga": { "id_ganga": "10", "description": "Esteril de baja ley zona este" },
    "mineral_reception": { "id_reception": 10, "reception_date": "2024-08-09 06:30:00" }
  },
  // Historial Extendido (2024 Semestre II - 2026)
  {
    "batch_code": "LOTE-2024-003",
    "batch_weight_tons": 1925.00,
    "entry_status": "processed",
    "ganga": { "id_ganga": "11", "description": "Ganga cuarzosa con trazas de pirita zona norte" },
    "mineral_reception": { "id_reception": 11, "reception_date": "2024-10-12 07:00:00" }
  },
  {
    "batch_code": "LOTE-2024-004",
    "batch_weight_tons": 1925.00,
    "entry_status": "processed",
    "ganga": { "id_ganga": "11", "description": "Ganga cuarzosa con trazas de pirita zona norte" },
    "mineral_reception": { "id_reception": 11, "reception_date": "2024-10-12 07:00:00" }
  },
  {
    "batch_code": "LOTE-2025-001",
    "batch_weight_tons": 2350.00,
    "entry_status": "processed",
    "ganga": { "id_ganga": "12", "description": "Material esteril campaña verano zona sur" },
    "mineral_reception": { "id_reception": 12, "reception_date": "2025-02-03 08:00:00" }
  },
  {
    "batch_code": "LOTE-2025-002",
    "batch_weight_tons": 2350.00,
    "entry_status": "processed",
    "ganga": { "id_ganga": "12", "description": "Material esteril campaña verano zona sur" },
    "mineral_reception": { "id_reception": 12, "reception_date": "2025-02-03 08:00:00" }
  },
  {
    "batch_code": "LOTE-2025-003",
    "batch_weight_tons": 3600.00,
    "entry_status": "processed",
    "ganga": { "id_ganga": "13", "description": "Ganga arcillo-arenosa zona este campaña seca" },
    "mineral_reception": { "id_reception": 13, "reception_date": "2025-05-19 07:30:00" }
  },
  {
    "batch_code": "LOTE-2025-004",
    "batch_weight_tons": 2050.00,
    "entry_status": "processed",
    "ganga": { "id_ganga": "14", "description": "Esteril con oxidos de manganeso zona central" },
    "mineral_reception": { "id_reception": 14, "reception_date": "2025-08-27 08:15:00" }
  },
  {
    "batch_code": "LOTE-2025-005",
    "batch_weight_tons": 2050.00,
    "entry_status": "processed",
    "ganga": { "id_ganga": "14", "description": "Esteril con oxidos de manganeso zona central" },
    "mineral_reception": { "id_reception": 14, "reception_date": "2025-08-27 08:15:00" }
  },
  {
    "batch_code": "LOTE-2025-006",
    "batch_weight_tons": 2600.00,
    "entry_status": "processed",
    "ganga": { "id_ganga": "15", "description": "Ganga de caliza con silice zona norte" },
    "mineral_reception": { "id_reception": 15, "reception_date": "2025-11-10 07:00:00" }
  },
  {
    "batch_code": "LOTE-2025-007",
    "batch_weight_tons": 2600.00,
    "entry_status": "in_process",
    "ganga": { "id_ganga": "15", "description": "Ganga de caliza con silice zona norte" },
    "mineral_reception": { "id_reception": 15, "reception_date": "2025-11-10 07:00:00" }
  },
  {
    "batch_code": "LOTE-2026-001",
    "batch_weight_tons": 3950.00,
    "entry_status": "processed",
    "ganga": { "id_ganga": "16", "description": "Material esteril inicio campaña 2026 zona sur" },
    "mineral_reception": { "id_reception": 16, "reception_date": "2026-01-20 08:00:00" }
  },
  {
    "batch_code": "LOTE-2026-002",
    "batch_weight_tons": 2150.00,
    "entry_status": "processed",
    "ganga": { "id_ganga": "17", "description": "Ganga siliceo-ferruginosa zona este" },
    "mineral_reception": { "id_reception": 17, "reception_date": "2026-04-08 07:45:00" }
  },
  {
    "batch_code": "LOTE-2026-003",
    "batch_weight_tons": 2150.00,
    "entry_status": "in_process",
    "ganga": { "id_ganga": "17", "description": "Ganga siliceo-ferruginosa zona este" },
    "mineral_reception": { "id_reception": 17, "reception_date": "2026-04-08 07:45:00" }
  },
  {
    "batch_code": "LOTE-2026-004",
    "batch_weight_tons": 3750.00,
    "entry_status": "pending",
    "ganga": { "id_ganga": "18", "description": "Esteril con presencia de arcillas zona central" },
    "mineral_reception": { "id_reception": 18, "reception_date": "2026-06-15 07:00:00" }
  }
]);

// =========================================================================
// 2. INSERCIÓN DE DATOS EN LA COLECCIÓN: metallurgical_process
// Une: metallurgical_process + worker + operation_equipment + process_measurement + process_parameter
// Respeta estrictamente el arreglo posicional de mediciones [int, double, date, binData/null]
// =========================================================================
db.metallurgical_process.insertMany([
  // LOTE-2021-001 (id_batch: 1)
  {
    "start_date_time": ISODate("2021-03-11T07:00:00Z"),
    "end_date_time": ISODate("2021-03-11T11:30:00Z"),
    "id_batch": 1,
    "worker": { "id_worker": 1, "first_name": "Carlos", "last_name": "Mamani Quispe" },
    "operation_equipament": { "id_equipment": 1, "equipment_code": "EQ-001", "equipment_name": "Chancadora de Mandibula C110" },
    "process_measurement": [0, 18.50, ISODate("2021-03-11T09:00:00Z"), null],
    "process_parameter": { "parameter_name": "Tamano de Particula D80", "unit_of_measure": "mm" }
  },
  {
    "start_date_time": ISODate("2021-03-12T07:00:00Z"),
    "end_date_time": ISODate("2021-03-12T15:00:00Z"),
    "id_batch": 1,
    "worker": { "id_worker": 8, "first_name": "Elena", "last_name": "Tapara Churata" },
    "operation_equipament": { "id_equipment": 5, "equipment_code": "EQ-005", "equipment_name": "Celda de Flotacion IF-300" },
    "process_measurement": [0, 9.80, ISODate("2021-03-12T08:30:00Z"), null],
    "process_parameter": { "parameter_name": "pH de Pulpa", "unit_of_measure": "pH" }
  },
  // LOTE-2022-001 (id_batch: 4)
  {
    "start_date_time": ISODate("2022-01-17T07:00:00Z"),
    "end_date_time": ISODate("2022-01-17T17:00:00Z"),
    "id_batch": 4,
    "worker": { "id_worker": 1, "first_name": "Carlos", "last_name": "Mamani Quispe" },
    "operation_equipament": { "id_equipment": 5, "equipment_code": "EQ-005", "equipment_name": "Celda de Flotacion IF-300" },
    "process_measurement": [1, 11.80, ISODate("2022-01-17T09:00:00Z"), null], // Fuera de rango (is_out_range: 1)
    "process_parameter": { "parameter_name": "pH de Pulpa", "unit_of_measure": "pH" }
  },
  // LOTE-2023-001 (id_batch: 9)
  {
    "start_date_time": ISODate("2023-02-20T07:00:00Z"),
    "end_date_time": ISODate("2023-02-20T17:30:00Z"),
    "id_batch": 9,
    "worker": { "id_worker": 1, "first_name": "Carlos", "last_name": "Mamani Quispe" },
    "operation_equipament": { "id_equipment": 5, "equipment_code": "EQ-005", "equipment_name": "Celda de Flotacion IF-300" },
    "process_measurement": [0, 10.20, ISODate("2023-02-20T09:00:00Z"), null],
    "process_parameter": { "parameter_name": "pH de Pulpa", "unit_of_measure": "pH" }
  },
  // LOTE-2023-004 (id_batch: 12)
  {
    "start_date_time": ISODate("2023-12-03T07:00:00Z"),
    "end_date_time": ISODate("2023-12-03T17:00:00Z"),
    "id_batch": 12,
    "worker": { "id_worker": 1, "first_name": "Carlos", "last_name": "Mamani Quispe" },
    "operation_equipament": { "id_equipment": 5, "equipment_code": "EQ-005", "equipment_name": "Celda de Flotacion IF-300" },
    "process_measurement": [0, 9.50, ISODate("2023-12-03T09:00:00Z"), null],
    "process_parameter": { "parameter_name": "pH de Pulpa", "unit_of_measure": "pH" }
  },
  // LOTE-2024-001 (id_batch: 14)
  {
    "start_date_time": ISODate("2024-03-27T07:00:00Z"),
    "end_date_time": ISODate("2024-03-27T18:00:00Z"),
    "id_batch": 14,
    "worker": { "id_worker": 6, "first_name": "Ana", "last_name": "Coaquira Lima" },
    "operation_equipament": { "id_equipment": 5, "equipment_code": "EQ-005", "equipment_name": "Celda de Flotacion IF-300" },
    "process_measurement": [1, 13.50, ISODate("2024-03-27T09:00:00Z"), null], // Dosis Espumante fuera de rango
    "process_parameter": { "parameter_name": "Dosis Espumante (MIBC)", "unit_of_measure": "g/t" }
  },
  // LOTE-2024-003 (id_batch: 16)
  {
    "start_date_time": ISODate("2024-10-14T07:00:00Z"),
    "end_date_time": ISODate("2024-10-14T17:30:00Z"),
    "id_batch": 16,
    "worker": { "id_worker": 6, "first_name": "Ana", "last_name": "Coaquira Lima" },
    "operation_equipament": { "id_equipment": 5, "equipment_code": "EQ-005", "equipment_name": "Celda de Flotacion IF-300" },
    "process_measurement": [0, 10.10, ISODate("2024-10-14T09:00:00Z"), null],
    "process_parameter": { "parameter_name": "pH de Pulpa", "unit_of_measure": "pH" }
  },
  // LOTE-2025-002 (id_batch: 19)
  {
    "start_date_time": ISODate("2025-03-11T07:00:00Z"),
    "end_date_time": ISODate("2025-03-11T17:30:00Z"),
    "id_batch": 19,
    "worker": { "id_worker": 1, "first_name": "Carlos", "last_name": "Mamani Quispe" },
    "operation_equipament": { "id_equipment": 5, "equipment_code": "EQ-005", "equipment_name": "Celda de Flotacion IF-300" },
    "process_measurement": [1, 1.48, ISODate("2025-03-11T09:30:00Z"), null], // Densidad fuera de rango
    "process_parameter": { "parameter_name": "Densidad de Pulpa Flotacion", "unit_of_measure": "g/cm3" }
  },
  // LOTE-2026-002 (id_batch: 26)
  {
    "start_date_time": ISODate("2026-04-10T07:00:00Z"),
    "end_date_time": ISODate("2026-04-10T17:30:00Z"),
    "id_batch": 26,
    "worker": { "id_worker": 6, "first_name": "Ana", "last_name": "Coaquira Lima" },
    "operation_equipament": { "id_equipment": 5, "equipment_code": "EQ-005", "equipment_name": "Celda de Flotacion IF-300" },
    "process_measurement": [1, 11.60, ISODate("2026-04-10T09:00:00Z"), null], // pH fuera de rango
    "process_parameter": { "parameter_name": "pH de Pulpa", "unit_of_measure": "pH" }
  }
]);

// =========================================================================
// 3. INSERCIÓN DE DATOS EN LA COLECCIÓN: laboratory_analysis
// Une: laboratory_analysis + sieve_analysis + hereda lote desde mineral_sample
// Mapea el arreglo posicional sieve_analysis: [string(malla), double(peso), string(porcentaje)]
// =========================================================================
db.laboratory_analysis.insertMany([
  {
    "analysis_code": "ANA-2021-001",
    "analysis_date": ISODate("2021-03-13T09:00:00Z"),
    "batch_code": "LOTE-2021-001",
    "sieve_analysis": ["#10", 12.50, "98.20"] // El porcentaje pasa como string según tu esquema
  },
  {
    "analysis_code": "ANA-2022-001",
    "analysis_date": ISODate("2022-01-18T09:00:00Z"),
    "batch_code": "LOTE-2022-001",
    "sieve_analysis": ["#10", 11.90, "97.80"]
  },
  {
    "analysis_code": "ANA-2023-004",
    "analysis_date": ISODate("2023-12-04T09:00:00Z"),
    "batch_code": "LOTE-2023-004",
    "sieve_analysis": ["#10", 13.20, "97.50"]
  },
  {
    "analysis_code": "ANA-2024-003",
    "analysis_date": ISODate("2024-10-15T09:00:00Z"),
    "batch_code": "LOTE-2024-003",
    "sieve_analysis": ["#10", 11.20, "98.30"]
  },
  {
    "analysis_code": "ANA-2025-001",
    "analysis_date": ISODate("2025-02-06T09:00:00Z"),
    "batch_code": "LOTE-2025-001",
    "sieve_analysis": ["#10", 12.10, "97.90"]
  },
  {
    "analysis_code": "ANA-2025-004",
    "analysis_date": ISODate("2025-05-22T09:00:00Z"),
    "batch_code": "LOTE-2025-003",
    "sieve_analysis": ["#10", 10.50, "98.60"]
  },
  {
    "analysis_code": "ANA-2025-007",
    "analysis_date": ISODate("2025-11-13T09:00:00Z"),
    "batch_code": "LOTE-2025-006",
    "sieve_analysis": ["#10", 11.80, "96.30"]
  },
  {
    "analysis_code": "ANA-2026-001",
    "analysis_date": ISODate("2026-01-23T09:00:00Z"),
    "batch_code": "LOTE-2026-001",
    "sieve_analysis": ["#10", 10.90, "98.40"]
  }
]);
