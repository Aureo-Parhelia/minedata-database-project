// ============================================================================
// SCRIPT DE INSERCION MASIVA: ENFOQUE NO RELACIONAL (MONGODB)
// ============================================================================

use MINEDATA_NOTSQL;

// Limpieza de colecciones para pruebas limpias
db.mineral_batch.deleteMany({});
db.laboratory_analysis.deleteMany({});
db.metallurgical_process.deleteMany({});

// ============================================================================
// 1. COLECCION: mineral_batch 
// ============================================================================
db.mineral_batch.insertMany([
    { "batch_code": "LOT-202607-001", "batch_weight_tons": 1250.45, "entry_status": "Procesado", "ganga": { "id_ganga": 101, "mineral_name": "Cuarzo y Pirita" }, "mineral_reception": { "id_reception": 5001, "reception_date": ISODate("2026-07-01T08:30:00Z") }, "id_batch": 1 },
    { "batch_code": "LOT-202607-002", "batch_weight_tons": 980.20, "entry_status": "Procesado", "ganga": { "id_ganga": 102, "mineral_name": "Calcita y Arcillas" }, "mineral_reception": { "id_reception": 5002, "reception_date": ISODate("2026-07-01T11:15:00Z") }, "id_batch": 2 },
    { "batch_code": "LOT-202607-003", "batch_weight_tons": 1500.00, "entry_status": "En Proceso", "ganga": { "id_ganga": 101, "mineral_name": "Cuarzo y Pirita" }, "mineral_reception": { "id_reception": 5003, "reception_date": ISODate("2026-07-02T06:00:00Z") }, "id_batch": 3 },
    { "batch_code": "LOT-202607-004", "batch_weight_tons": 1100.15, "entry_status": "En Proceso", "ganga": { "id_ganga": 103, "mineral_name": "Feldespatos" }, "mineral_reception": { "id_reception": 5004, "reception_date": ISODate("2026-07-02T14:20:00Z") }, "id_batch": 4 },
    { "batch_code": "LOT-202607-005", "batch_weight_tons": 1340.80, "entry_status": "En Espera", "ganga": { "id_ganga": 101, "mineral_name": "Cuarzo y Pirita" }, "mineral_reception": { "id_reception": 5005, "reception_date": ISODate("2026-07-03T01:10:00Z") }, "id_batch": 5 },
    { "batch_code": "LOT-202607-006", "batch_weight_tons": 890.50, "entry_status": "En Espera", "ganga": { "id_ganga": 104, "mineral_name": "Dolomita" }, "mineral_reception": { "id_reception": 5006, "reception_date": ISODate("2026-07-03T07:45:00Z") }, "id_batch": 6 },
    { "batch_code": "LOT-202607-007", "batch_weight_tons": 1610.00, "entry_status": "En Espera", "ganga": { "id_ganga": 102, "mineral_name": "Calcita y Arcillas" }, "mineral_reception": { "id_reception": 5007, "reception_date": ISODate("2026-07-03T18:30:00Z") }, "id_batch": 7 },
    { "batch_code": "LOT-202607-008", "batch_weight_tons": 1420.25, "entry_status": "En Espera", "ganga": { "id_ganga": 101, "mineral_name": "Cuarzo y Pirita" }, "mineral_reception": { "id_reception": 5008, "reception_date": ISODate("2026-07-04T02:00:00Z") }, "id_batch": 8 },
    { "batch_code": "LOT-202607-009", "batch_weight_tons": 1180.00, "entry_status": "En Espera", "ganga": { "id_ganga": 103, "mineral_name": "Feldespatos" }, "mineral_reception": { "id_reception": 5009, "reception_date": ISODate("2026-07-04T09:15:00Z") }, "id_batch": 9 },
    { "batch_code": "LOT-202607-010", "batch_weight_tons": 1050.60, "entry_status": "En Espera", "ganga": { "id_ganga": 105, "mineral_name": "Siderita" }, "mineral_reception": { "id_reception": 5010, "reception_date": ISODate("2026-07-04T13:00:00Z") }, "id_batch": 10 },
    { "batch_code": "LOT-202607-011", "batch_weight_tons": 1310.40, "entry_status": "En Espera", "ganga": { "id_ganga": 101, "mineral_name": "Cuarzo y Pirita" }, "mineral_reception": { "id_reception": 5011, "reception_date": ISODate("2026-07-04T16:45:00Z") }, "id_batch": 11 },
    { "batch_code": "LOT-202607-012", "batch_weight_tons": 950.00, "entry_status": "En Espera", "ganga": { "id_ganga": 102, "mineral_name": "Calcita y Arcillas" }, "mineral_reception": { "id_reception": 5012, "reception_date": ISODate("2026-07-04T21:00:00Z") }, "id_batch": 12 },
    { "batch_code": "LOT-202607-013", "batch_weight_tons": 1225.50, "entry_status": "En Espera", "ganga": { "id_ganga": 104, "mineral_name": "Dolomita" }, "mineral_reception": { "id_reception": 5013, "reception_date": ISODate("2026-07-05T02:30:00Z") }, "id_batch": 13 },
    { "batch_code": "LOT-202607-014", "batch_weight_tons": 1480.00, "entry_status": "En Espera", "ganga": { "id_ganga": 101, "mineral_name": "Cuarzo y Pirita" }, "mineral_reception": { "id_reception": 5014, "reception_date": ISODate("2026-07-05T05:15:00Z") }, "id_batch": 14 },
    { "batch_code": "LOT-202607-015", "batch_weight_tons": 1150.35, "entry_status": "En Espera", "ganga": { "id_ganga": 103, "mineral_name": "Feldespatos" }, "mineral_reception": { "id_reception": 5015, "reception_date": ISODate("2026-07-05T08:00:00Z") }, "id_batch": 15 }
]);

// ============================================================================
// 2. COLECCIÓN: laboratory_analysis (10 Ensayos Granulométricos Completos)
// ============================================================================
db.laboratory_analysis.insertMany([
    {
        "id_analysis": 301, "analysis_code": "LAB-AN-2026-094", "analysis_date": ISODate("2026-07-01T14:45:00Z"), "id_batch": 1,
        "sieve_analysis": [
            { "mesh_number": "Malla 65", "weight_retained": 45.2, "percentage_passing": 95.48 },
            { "mesh_number": "Malla 100", "weight_retained": 120.6, "percentage_passing": 83.42 },
            { "mesh_number": "Malla 200", "weight_retained": 380.1, "percentage_passing": 45.41 }
        ]
    },
    {
        "id_analysis": 302, "analysis_code": "LAB-AN-2026-095", "analysis_date": ISODate("2026-07-01T18:20:00Z"), "id_batch": 2,
        "sieve_analysis": [
            { "mesh_number": "Malla 65", "weight_retained": 30.1, "percentage_passing": 96.99 },
            { "mesh_number": "Malla 100", "weight_retained": 105.4, "percentage_passing": 86.45 },
            { "mesh_number": "Malla 200", "weight_retained": 410.3, "percentage_passing": 41.22 }
        ]
    },
    {
        "id_analysis": 303, "analysis_code": "LAB-AN-2026-096", "analysis_date": ISODate("2026-07-02T10:30:00Z"), "id_batch": 3,
        "sieve_analysis": [
            { "mesh_number": "Malla 65", "weight_retained": 52.0, "percentage_passing": 94.80 },
            { "mesh_number": "Malla 100", "weight_retained": 140.5, "percentage_passing": 80.75 },
            { "mesh_number": "Malla 200", "weight_retained": 395.2, "percentage_passing": 41.23 }
        ]
    },
    {
        "id_analysis": 304, "analysis_code": "LAB-AN-2026-097", "analysis_date": ISODate("2026-07-02T19:15:00Z"), "id_batch": 4,
        "sieve_analysis": [
            { "mesh_number": "Malla 65", "weight_retained": 41.3, "percentage_passing": 95.87 },
            { "mesh_number": "Malla 100", "weight_retained": 115.2, "percentage_passing": 84.35 },
            { "mesh_number": "Malla 200", "weight_retained": 372.0, "percentage_passing": 47.15 }
        ]
    },
    {
        "id_analysis": 305, "analysis_code": "LAB-AN-2026-098", "analysis_date": ISODate("2026-07-03T05:00:00Z"), "id_batch": 5,
        "sieve_analysis": [
            { "mesh_number": "Malla 65", "weight_retained": 48.7, "percentage_passing": 95.13 },
            { "mesh_number": "Malla 100", "weight_retained": 128.9, "percentage_passing": 82.24 },
            { "mesh_number": "Malla 200", "weight_retained": 388.4, "percentage_passing": 43.40 }
        ]
    },
    {
        "id_analysis": 306, "analysis_code": "LAB-AN-2026-099", "analysis_date": ISODate("2026-07-03T11:45:00Z"), "id_batch": 6,
        "sieve_analysis": [
            { "mesh_number": "Malla 65", "weight_retained": 35.5, "percentage_passing": 96.45 },
            { "mesh_number": "Malla 100", "weight_retained": 109.1, "percentage_passing": 85.54 },
            { "mesh_number": "Malla 200", "weight_retained": 402.6, "percentage_passing": 45.28 }
        ]
    },
    {
        "id_analysis": 307, "analysis_code": "LAB-AN-2026-100", "analysis_date": ISODate("2026-07-03T22:10:00Z"), "id_batch": 7,
        "sieve_analysis": [
            { "mesh_number": "Malla 65", "weight_retained": 55.1, "percentage_passing": 94.49 },
            { "mesh_number": "Malla 100", "weight_retained": 145.0, "percentage_passing": 79.99 },
            { "mesh_number": "Malla 200", "weight_retained": 420.8, "percentage_passing": 37.91 }
        ]
    },
    {
        "id_analysis": 308, "analysis_code": "LAB-AN-2026-101", "analysis_date": ISODate("2026-07-04T05:30:00Z"), "id_batch": 8,
        "sieve_analysis": [
            { "mesh_number": "Malla 65", "weight_retained": 43.0, "percentage_passing": 95.70 },
            { "mesh_number": "Malla 100", "weight_retained": 122.4, "percentage_passing": 83.46 },
            { "mesh_number": "Malla 200", "weight_retained": 381.5, "percentage_passing": 45.31 }
        ]
    },
    {
        "id_analysis": 309, "analysis_code": "LAB-AN-2026-102", "analysis_date": ISODate("2026-07-04T12:00:00Z"), "id_batch": 9,
        "sieve_analysis": [
            { "mesh_number": "Malla 65", "weight_retained": 39.4, "percentage_passing": 96.06 },
            { "mesh_number": "Malla 100", "weight_retained": 114.0, "percentage_passing": 84.66 },
            { "mesh_number": "Malla 200", "weight_retained": 379.0, "percentage_passing": 46.76 }
        ]
    },
    {
        "id_analysis": 310, "analysis_code": "LAB-AN-2026-103", "analysis_date": ISODate("2026-07-04T16:00:00Z"), "id_batch": 10,
        "sieve_analysis": [
            { "mesh_number": "Malla 65", "weight_retained": 46.8, "percentage_passing": 95.32 },
            { "mesh_number": "Malla 100", "weight_retained": 125.1, "percentage_passing": 82.81 },
            { "mesh_number": "Malla 200", "weight_retained": 390.2, "percentage_passing": 43.79 }
        ]
    }
]);

// ============================================================================
// 3. COLECCIÓN: metallurgical_process (Corridas Operativas de Planta con Telemetría)
// ============================================================================
db.metallurgical_process.insertMany([
    {
        "id_process": 7001,
        "start_date_time": ISODate("2026-07-01T09:00:00Z"),
        "end_date_time": ISODate("2026-07-01T17:00:00Z"),
        "worker": { "id_worker": 1240, "first_name": "Carlos", "last_name": "Mendoza Delgado" },
        "operation_equipment": { "id_equipment": 10, "equipment_code": "MB-02", "equipment_name": "Molino de Bolas Primario 8x10" },
        "process_measurement": [
            { "id_measurement": 90001, "recorded_value": 72.4, "measurement_time": ISODate("2026-07-01T09:15:00Z"), "is_out_range": false },
            { "id_measurement": 90002, "recorded_value": 73.8, "measurement_time": ISODate("2026-07-01T10:30:00Z"), "is_out_range": false },
            { "id_measurement": 90003, "recorded_value": 75.1, "measurement_time": ISODate("2026-07-01T12:00:00Z"), "is_out_range": false },
            { "id_measurement": 90004, "recorded_value": 74.2, "measurement_time": ISODate("2026-07-01T14:00:00Z"), "is_out_range": false },
            { "id_measurement": 90005, "recorded_value": 88.9, "measurement_time": ISODate("2026-07-01T15:30:00Z"), "is_out_range": true },
            { "id_measurement": 90006, "recorded_value": 71.5, "measurement_time": ISODate("2026-07-01T16:45:00Z"), "is_out_range": false }
        ],
        "id_batch": 1
    },
    {
        "id_process": 7002,
        "start_date_time": ISODate("2026-07-01T17:30:00Z"),
        "end_date_time": ISODate("2026-07-02T01:30:00Z"),
        "worker": { "id_worker": 1582, "first_name": "Juan Pablo", "last_name": "Quispe Flores" },
        "operation_equipment": { "id_equipment": 14, "equipment_code": "CF-10", "equipment_name": "Celda de Flotación Rougher R-01" },
        "process_measurement": [
            { "id_measurement": 91001, "recorded_value": 4.2, "measurement_time": ISODate("2026-07-01T18:00:00Z"), "is_out_range": false },
            { "id_measurement": 91002, "recorded_value": 4.3, "measurement_time": ISODate("2026-07-01T19:30:00Z"), "is_out_range": false },
            { "id_measurement": 91003, "recorded_value": 4.5, "measurement_time": ISODate("2026-07-01T21:00:00Z"), "is_out_range": false },
            { "id_measurement": 91004, "recorded_value": 5.9, "measurement_time": ISODate("2026-07-01T22:45:00Z"), "is_out_range": true },
            { "id_measurement": 91005, "recorded_value": 4.1, "measurement_time": ISODate("2026-07-02T00:30:00Z"), "is_out_range": false }
        ],
        "id_batch": 2
    },
    {
        "id_process": 7003,
        "start_date_time": ISODate("2026-07-02T02:00:00Z"),
        "end_date_time": ISODate("2026-07-02T10:00:00Z"),
        "worker": { "id_worker": 1240, "first_name": "Carlos", "last_name": "Mendoza Delgado" },
        "operation_equipment": { "id_equipment": 10, "equipment_code": "MB-02", "equipment_name": "Molino de Bolas Primario 8x10" },
        "process_measurement": [
            { "id_measurement": 92001, "recorded_value": 70.1, "measurement_time": ISODate("2026-07-02T03:00:00Z"), "is_out_range": false },
            { "id_measurement": 92002, "recorded_value": 72.5, "measurement_time": ISODate("2026-07-02T05:30:00Z"), "is_out_range": false },
            { "id_measurement": 92003, "recorded_value": 71.9, "measurement_time": ISODate("2026-07-02T08:00:00Z"), "is_out_range": false }
        ],
        "id_batch": 3
    },
    {
        "id_process": 7004,
        "start_date_time": ISODate("2026-07-02T10:30:00Z"),
        "end_date_time": ISODate("2026-07-02T18:30:00Z"),
        "worker": { "id_worker": 1390, "first_name": "Ana Lucía", "last_name": "Torres Campos" },
        "operation_equipment": { "id_equipment": 11, "equipment_code": "MB-03", "equipment_name": "Molino de Bolas Secundario 6x8" },
        "process_measurement": [
            { "id_measurement": 93001, "recorded_value": 65.4, "measurement_time": ISODate("2026-07-02T11:00:00Z"), "is_out_range": false },
            { "id_measurement": 93002, "recorded_value": 66.2, "measurement_time": ISODate("2026-07-02T13:30:00Z"), "is_out_range": false },
            { "id_measurement": 93003, "recorded_value": 64.9, "measurement_time": ISODate("2026-07-02T16:00:00Z"), "is_out_range": false }
        ],
        "id_batch": 4
    },
    {
        "id_process": 7005,
        "start_date_time": ISODate("2026-07-02T19:00:00Z"),
        "end_date_time": ISODate("2026-07-03T03:00:00Z"),
        "worker": { "id_worker": 1582, "first_name": "Juan Pablo", "last_name": "Quispe Flores" },
        "operation_equipment": { "id_equipment": 14, "equipment_code": "CF-10", "equipment_name": "Celda de Flotación Rougher R-01" },
        "process_measurement": [
            { "id_measurement": 94001, "recorded_value": 4.4, "measurement_time": ISODate("2026-07-02T20:00:00Z"), "is_out_range": false },
            { "id_measurement": 94002, "recorded_value": 4.6, "measurement_time": ISODate("2026-07-02T22:30:00Z"), "is_out_range": false },
            { "id_measurement": 94003, "recorded_value": 1.2, "measurement_time": ISODate("2026-07-03T01:15:00Z"), "is_out_range": true }
        ],
        "id_batch": 5
    }
]);
