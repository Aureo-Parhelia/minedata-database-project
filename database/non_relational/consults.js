// ============================================================================
// SCRIPT DE OPERACIONES Y AGREGACIONES NO RELACIONALES (MONGODB)
// PROYECTO: MINEDATA - SISTEMA DE CONTROL METALÚRGICO
// ============================================================================

use MINEDATA_NOTSQL;

// ----------------------------------------------------------------------------
// OPERACIÓN 1: Inserción atómica de un nuevo análisis de laboratorio
// ----------------------------------------------------------------------------
db.laboratory_analysis.insertOne({
    "id_analysis": 311,
    "analysis_code": "LAB-AN-2026-104",
    "analysis_date": ISODate("2026-07-04T18:00:00Z"),
    "id_batch": 4,
    "sieve_analysis": [
        { "mesh_number": "Malla 65", "weight_retained": 38.2, "percentage_passing": 96.10 },
        { "mesh_number": "Malla 200", "weight_retained": 390.5, "percentage_passing": 44.15 }
    ]
});

// ----------------------------------------------------------------------------
// OPERACIÓN 2: Actualización del estado operativo de un lote específico
// ----------------------------------------------------------------------------
db.mineral_batch.updateOne(
    { "batch_code": "LOT-202607-003" },
    { $set: { "entry_status": "Procesado" } }
);

// ----------------------------------------------------------------------------
// OPERACIÓN 3: Búsqueda de lotes masivos con presencia de Cuarzo en Ganga
// ----------------------------------------------------------------------------
db.mineral_batch.find(
    { 
        "batch_weight_tons": { $gte: 1200.00 }, 
        "ganga.mineral_name": { $regex: "Cuarzo", $options: "i" } 
    },
    { "batch_code": 1, "batch_weight_tons": 1, "ganga.mineral_name": 1, "_id": 0 }
);

// ----------------------------------------------------------------------------
// OPERACIÓN 4: Localización de procesos en molienda primaria (Equipo MB-02)
// ----------------------------------------------------------------------------
db.metallurgical_process.find(
    { "operation_equipment.equipment_code": "MB-02" },
    { "id_process": 1, "worker.last_name": 1, "start_date_time": 1, "_id": 0 }
);

// ----------------------------------------------------------------------------
// OPERACIÓN 5: Cálculo del tonelaje total acumulado por estado operativo
// ----------------------------------------------------------------------------
db.mineral_batch.aggregate([
    { 
        $group: { 
            _id: "$entry_status", 
            total_toneladas: { $sum: "$batch_weight_tons" }, 
            total_lotes: { $sum: 1 } 
        } 
    },
    { $sort: { total_toneladas: -1 } }
]);

// ----------------------------------------------------------------------------
// OPERACIÓN 6: Conteo de fallas de telemetría (fuera de rango) por equipo
// Optimizada: Aplica $match previo al $unwind para reducir consumo de memoria.
// ----------------------------------------------------------------------------
db.metallurgical_process.aggregate([
    { $match: { "process_measurement.is_out_range": true } },
    { $unwind: "$process_measurement" },
    { $match: { "process_measurement.is_out_range": true } },
    { 
        $group: { 
            _id: "$operation_equipment.equipment_name", 
            total_alertas: { $sum: 1 } 
        } 
    },
    { $sort: { total_alertas: -1 } }
]);

// ----------------------------------------------------------------------------
// OPERACIÓN 7: Promedio de paso granulométrico por tipo de malla de control
// ----------------------------------------------------------------------------
db.laboratory_analysis.aggregate([
    { $unwind: "$sieve_analysis" },
    { 
        $group: { 
            _id: "$sieve_analysis.mesh_number", 
            promedio_pasante: { $avg: "$sieve_analysis.percentage_passing" } 
        } 
    },
    { $sort: { promedio_pasante: -1 } }
]);

// ----------------------------------------------------------------------------
// OPERACIÓN 8: Resumen de carga de trabajo (mediciones supervisadas) por operador
// ----------------------------------------------------------------------------
db.metallurgical_process.aggregate([
    { 
        $project: { 
            operador: { $concat: ["$worker.first_name", " ", "$worker.last_name"] },
            total_mediciones: { $size: "$process_measurement" }
        } 
    },
    { 
        $group: { 
            _id: "$operador", 
            total_lecturas_guardia: { $sum: "$total_mediciones" } 
        } 
    },
    { $sort: { total_lecturas_guardia: -1 } }
]);

/* ----------------------------------------------------------------------------
 OPERACIÓN 9: Extracción del valor máximo histórico registrado por telemetría
 Optimizada: Reduce los documentos proyectando el campo del array directamente.
 ---------------------------------------------------------------------------- */
db.metallurgical_process.aggregate([
    { $unwind: "$process_measurement" },
    { $sort: { "process_measurement.recorded_value": -1 } },
    { $limit: 1 },
    { 
        $project: { 
            _id: 0,
            "id_process": 1, 
            "operation_equipment.equipment_code": 1, 
            "max_valor": "$process_measurement.recorded_value" 
        } 
    }
]);

// ----------------------------------------------------------------------------
// OPERACIÓN 10: Depuración segura de registros inconsistentes o rechazados
// ----------------------------------------------------------------------------
db.mineral_batch.deleteMany({ 
    "batch_weight_tons": { $lte: 0.00 },
    "entry_status": "Rechazado" 
});
