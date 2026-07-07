// ============================================================================
// SCRIPT DE OPERACIONES Y AGREGACIONES NO RELACIONALES (MONGODB)
// PROYECTO: MINEDATA - SISTEMA DE CONTROL METALÚRGICO
// ============================================================================

/*Consulta 1: Balance de Masa Crítico - Encontrar lotes procesados con alta carga 
volumétrica (>2500 toneladas) cuya roca estéril (ganga) sea de composición compleja 
("cuarzo", "silice" o "pirita")
*/
db.mineral_batch.find({
  $and: [
    { "batch_weight_tons": { $gt: 2500 } },
    { "entry_status": { $in: ["Processed", "processed"] } },
    {
      $or: [
        { "ganga.description": { $regex: "cuarzo", $options: "i" } },
        { "ganga.description": { $regex: "silice", $options: "i" } },
        { "ganga.description": { $regex: "pirita", $options: "i" } }
      ]
    }
  ]
});

/*Consulta 2: Reporte de Espera en Tolva - Listar los códigos de lote, fecha de 
recepción y cálculo estimado de espacio requerido de lotes estancados en estado 
"Pending", ordenados de mayor a menor tonelaje bruto
*/
db.mineral_batch.find(
  { "entry_status": { $in: ["Pending", "pending"] } },
  { "_id": 0, "batch_code": 1, "toneladas_brutas": "$batch_weight_tons", 
    "fecha_ingreso": "$mineral_reception.reception_date" }
).sort({ "batch_weight_tons": -1 });

/*Consulta 3: Auditoría Operativa de Turno - Buscar procesos metalúrgicos críticos 
operados en celdas de flotación donde el personal asignado pertenezca a la familia de 
operadores calificados (Mamani Quispe o Coaquira Lima)
*/
db.metallurgical_process.find({
  $and: [
    { "operation_equipament.equipment_code": "EQ-005" },
    {
      $or: [
        { "worker.first_name": "Carlos", "worker.last_name": "Mamani Quispe" },
        { "worker.first_name": "Ana", "worker.last_name": "Coaquira Lima" }
      ]
    }
  ]
});

/*Consulta 4: Trazabilidad de Ensayos Recientes - Obtener los últimos 3 análisis 
granulométricos realizados en el laboratorio metalúrgico saltándose los primeros 
2 registros para auditoría intermedia
*/
db.laboratory_analysis.find()
  .sort({ "analysis_date": -1 })
  .skip(2)
  .limit(3);


/*Consulta 5: Control Regulatorio de Equipamiento - Localizar procesos donde se haya
 utilizado maquinaria específica de chancado o flotación (EQ-001 o EQ-005) evaluando 
 únicamente procesos concluidos con fecha extrema
*/
db.metallurgical_process.find({
  "operation_equipament.equipment_code": { $in: ["EQ-001", "EQ-005"] },
  "end_date_time": { $exists: true }
});

/*Consulta 6: Monitoreo de Alarmas SCADA - Detectar eventos fuera de rango operativo
 (Alerta de desviación = 1) ocurridos estrictamente durante el año fiscal histórico 2024
*/
db.metallurgical_process.find({
  "process_measurement.0": 1,
  "start_date_time": {
    $gte: ISODate("2024-01-01T00:00:00Z"),
    $lte: ISODate("2024-12-31T23:59:59Z")
  }
});


/*Consulta 7: Control de Calidad granulométrica - Buscar análisis de laboratorio que 
ejecuten el tamizado bajo el estándar de mallas gruesas o medias (#10) y que 
simultáneamente reporten un peso de mineral retenido alto (>12.00 gramos)
*/
db.laboratory_analysis.find({
  "sieve_analysis.0": "#10",
  "sieve_analysis.1": { $gt: 12.00 }
});


/*Consulta 8: Alertas Críticas por Desviación Química - Filtrar procesos de flotación 
donde el pH o la densidad de pulpa (índice 1 del array) supere los límites de seguridad 
química establecidos en 11.50 unidades
*/
db.metallurgical_process.find({
  "process_measurement.1": { $gt: 11.50 },
  "process_parameter.parameter_name": { $exists: true }
});

/*Consulta 9: Calcular el total de toneladas de mineral bruto ingresadas a la planta
 concentradora según la descripción de la Ganga
*/
db.mineral_batch.aggregate([
  {
    $group: {
      "_id": "$ganga.description",
      "total_toneladas": { $sum: "$batch_weight_tons" },
      "cantidad_lotes": { $sum: 1 }
    }
  },
  { $sort: { "total_toneladas": -1 } }
]);

/*Consulta 10: Obtener el ranking de los equipos industriales que acumularon la mayor 
cantidad de alertas por encima del rango operativo
*/
db.metallurgical_process.aggregate([
  { $match: { "process_measurement.0": 1 } },
  {
    $group: {
      "_id": {
        "codigo": "$operation_equipament.equipment_code",
        "nombre": "$operation_equipament.equipment_name"
      },
      "total_alertas_fuera_rango": { $sum: 1 }
    }
  },
  { $sort: { "total_alertas_fuera_rango": -1 } }
]);

/*Consulta 11: Mostrar la cantidad total de procesos metalúrgicos ejecutados y 
controlados por cada trabajador asignado a planta
*/
db.metallurgical_process.aggregate([
  {
    $group: {
      "_id": {
        "id_trabajador": "$worker.id_worker",
        "nombre_completo": { $concat: ["$worker.first_name", " ", "$worker.last_name"] }
      },
      "total_procesos_operados": { $sum: 1 }
    }
  },
  { $sort: { "total_procesos_operados": -1 } }
]);

/*Consulta 12: Extraer el valor promedio y el valor máximo de los pesos 
retenidos en los ensayos granulométricos de laboratorio
*/
db.laboratory_analysis.aggregate([
  {
    $group: {
      "_id": null,
      "promedio_peso_retenido": { $avg: "$sieve_analysis.1" },
      "maximo_peso_retenido": { $max: "$sieve_analysis.1" }
    }
  }
]);

/*Consulta 13: Identificar procesos críticos en la flotación donde el pH de la 
Pulpa registre valores fuera de rango operacional (menores a 9.6 o mayores a 11.0)*/

db.metallurgical_process.find({
  "process_parameter.parameter_name": "pH de Pulpa",
  $or: [
    { "process_measurement.1": { $lt: 9.60 } },
    { "process_measurement.1": { $gt: 11.00 } }
  ]
},
{
  "_id": 0,
  "id_batch": 1,
  "process_parameter.parameter_name": 1,
  "process_measurement": 1
});
/*Consulta 14: Clasificar de manera dinámica los lotes de mineral según su tonelaje
 bruto en categorías de volumen de carga para la tolva
*/
db.mineral_batch.aggregate([
  {
    $project: {
      "_id": 0,
      "batch_code": 1,
      "batch_weight_tons": 1,
      "categoria_volumen_carga": {
        $switch: {
          "branches": [
            { "case": { $lt: ["$batch_weight_tons", 2000.0] }, "then": "Carga Baja" },
            { "case": { $and: [{ $gte: ["$batch_weight_tons", 2000.0] }, 
                                { $lte: ["$batch_weight_tons", 3000.0] }] }, "then": "Carga Estándar" }
          ],
          "default": "Carga Masiva (Requiere Almacén Externo)"
        }
      }
    }
  }
]);

/*Consulta 15: Cruzar la información transaccional de los procesos metalúrgicos con
 los datos maestros del lote de mineral correspondiente
*/
db.metallurgical_process.aggregate([
  {
    $lookup: {
      "from": "mineral_batch",
      "localField": "id_batch",
      "foreignField": "mineral_reception.id_reception",
      "as": "datos_lote"
    }
  },
  { $unwind: { "path": "$datos_lote", "preserveNullAndEmptyArrays": true } },
  {
    $project: {
      "_id": 0,
      "fecha_proceso": "$start_date_time",
      "maquinaria": "$operation_equipament.equipment_name",
      "codigo_lote_comprobado": "$datos_lote.batch_code",
      "tonelaje_lote": "$datos_lote.batch_weight_tons",
      "estado_recepcion": "$datos_lote.entry_status"
    }
  },
  { $limit: 5 }
]);
