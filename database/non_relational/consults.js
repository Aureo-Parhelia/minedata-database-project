// ============================================================================
// SCRIPT DE OPERACIONES Y AGREGACIONES NO RELACIONALES (MONGODB)
// ============================================================================

use MINEDATA_NOTSQL;
// Consulta 1: Inserción atómica de un nuevo análisis de laboratorio con subdocumentos
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

// Consulta 2: Actualización del estado operativo de un lote específico
db.mineral_batch.updateOne(
    { "batch_code": "LOT-202607-003" },
    { $set: { "entry_status": "Procesado" } }
);


// Consulta 3: Búsqueda de lotes masivos con mineral de Cuarzo
db.mineral_batch.find(
    { 
        "batch_weight_tons": { $gte: 1200.00 }, 
        "ganga.mineral_name": /Cuarzo/ 
    },
    { "batch_code": 1, "batch_weight_tons": 1, "ganga.mineral_name": 1, "_id": 0 }
);

// Consulta 4: Localización de procesos metalúrgicos que usaron maquinaria crítica
db.metallurgical_process.find(
    { "operation_equipment.equipment_code": "MB-02" },
    { "id_process": 1, "worker.last_name": 1, "start_date_time": 1 }
);

// Consulta 5: Cálculo del tonelaje total acumulado por estado operativo
db.mineral_batch.aggregate([
    { $group: { _id: "$entry_status", total_toneladas: { $sum: "$batch_weight_tons" }, total_lotes: { $sum: 1 } } },
    { $sort: { total_toneladas: -1 } }
]);

// Consulta 6: Conteo de fallas de telemetría (fuera de rango) acumuladas por equipo
db.metallurgical_process.aggregate([
    { $unwind: "$process_measurement" },
    { $match: { "process_measurement.is_out_range": true } },
    { $group: { _id: "$operation_equipment.equipment_name", total_alertas: { $sum: 1 } } }
]);

// Consulta 7: Promedio de paso granulométrico por tipo de malla de control
db.laboratory_analysis.aggregate([
    { $unwind: "$sieve_analysis" },
    { $group: { _id: "$sieve_analysis.mesh_number", promedio_pasante: { $avg: "$sieve_analysis.percentage_passing" } } },
    { $sort: { promedio_pasante: -1 } }
]);

// Consulta 8: Resumen de rendimiento e indicador de carga de trabajo por operador
db.metallurgical_process.aggregate([
    { $project: { 
        operador: { $concat: ["$worker.first_name", " ", "$worker.last_name"] },
        total_mediciones_supervisadas: { $size: "$process_measurement" }
    } },
    { $group: { _id: "$operador", total_lecturas_guardia: { $sum: "$total_mediciones_supervisadas" } } }
]);


// Consulta 9: Extracción del valor máximo histórico registrado por sensor en planta
db.metallurgical_process.aggregate([
    { $unwind: "$process_measurement" },
    { $sort: { "process_measurement.recorded_value": -1 } },
    { $limit: 1 },
    { $project: { "id_process": 1, "operation_equipment.equipment_code": 1, "max_valor": "$process_measurement.recorded_value" } }
]);

// Consulta 10: Depuración segura de lotes cancelados o erróneos
db.mineral_batch.deleteMany({ 
    "batch_weight_tons": { $lte: 0.00 },
    "entry_status": "Rechazado" 
});
