/*
============================================================================
 CONSULTAS NOSQL - MONGODB
============================================================================
*/

/*
CONSULTA 1: Lotes procedentes de la Zona Norte
Descripción:
Recupera los lotes cuyo origen geológico pertenece a la Zona Norte.
Permite analizar el saaporte productivo por zona minera.
*/
use("minedata_nosql"); 
db.mineral_batch.find({
    "mineral_reception.ganga.origin_zone": /Zona Norte/i
});


/*
CONSULTA 2: Lotes con presencia de pirita
Descripción:
Busca lotdses cuya descripción mineralógica contiene pirita.
La composición mineral influye en los resultados metalúrgicos.
*/
use("minedata_nosql"); 
db.mineral_batch.find({
    "mineral_reception.ganga.description": /pirita/i
});


/*
CONSULTA 3: Procesos ejecutados en equipos de flotación
Descripción:
Obtiene los procesdsos desarrollados en la celda de flotación.
La flotación es una etapa clave para recuperar el mineral valioso.
*/
use("minedata_nosql"); 
db.metallurgical_process.find({
    "operation_equipment.equipment_code": "EQ-005"
});


/*
CONSULTA 4: Procesos con concentrados de alta pureza
Descripción:
Muestra los procesos cuyo concentrado supera el 30% de pureza.
Permite identsdificar los mejores resultados de producción.
*/
use("minedata_nosql"); 
db.metallurgical_process.find({
    "concentrate.purity_percentage": {
        $gt: NumberDecimal("30")
    }
});




/*
CONSULTA 5: Análisis con ley mineral superior al 35%
Descripción:
Obtiene muestrasdss con alto contenido metálico.
Representan los mejores resultados obtenidos en laboratorio.
*/
use("minedata_nosql"); 
db.laboratory_analysis.find({
    mineral_grade_porcentage: {
        $gt: NumberDecimal("35")
    }
});


/*
CONSULTA 6: Ranking de zonas geológicas por tonelaje
Descripción:
Agrupa los lotes según sa su zona de origen y calcula el tonelaje acumulado.
Permite identificar qué zonas aportan mayor volumen de mineral.
*/
use("minedata_nosql"); 
db.mineral_batch.aggregate([
{
    $group: {
        _id: "$mineral_reception.ganga.origin_zone",
        total_toneladas: {
            $sum: "$batch_weight_tons"
        },
        cantidad_lotes: {
            $sum: 1
        }
    }
},
{
    $sort: {
        total_toneladas: -1
    }
}
]);

use("minedata_nosql");





/*
CONSULTA 7: Distribución de lotes según estado
Descripción:
Cuenta cuántoasds lotes existen para cada estado.
Permite monitorear el avance general del procesamiento mineral.
*/
use("minedata_nosql"); 
db.mineral_batch.aggregate([
{
    $group: {
        _id: "$entry_status",
        cantidad_lotes: {
            $sum: 1
        }
    }
},
{
    $sort: {
        cantidad_lotes: -1
    }
}
]);


/*
CONSULTA 8: Cantidad de procesos ejecutados por trabajador
DescripcióÑ: 
Cuenta los procesos operados por cada trabajador.
Permite evaluar la participación operativa del personal.
*/
use("minedata_nosql"); 
db.metallurgical_process.aggregate([
{
    $group: {
        _id: {
            nombre: "$worker.first_name",
            apellido: "$worker.last_name"
        },
        total_procesos: {
            $sum: 1
        }
    }
},
{
    $sort: {
        total_procesos: -1
    }
}
]);


/*
CONSULTA 9: Promedio y máximo de ley mineral obtenida
Descripción:
Calcula estadísticas de calidad de los análisis.
Permite evaluar el rendimiento metalúrgico general.
*/
use("minedata_nosql"); 
db.laboratory_analysis.aggregate([
{
    $group: {
        _id: null,
        promedio_ley: {
            $avg: "$mineral_grade_porcentage"
        },
        maxima_ley: {
            $max: "$mineral_grade_porcentage"
        },
        minima_ley: {
            $min: "$mineral_grade_porcentage"
        }
    }
}
]);


/*
CONSULTA 10: Promedio de peso retenido por malla
Descripción:
Analiza los resultados granulométricos por tipo de malla.
Permite evaluar el comportamiento de molienda del mineral.
*/
use("minedata_nosql"); 
db.laboratory_analysis.aggregate([
{
    $unwind: "$sieve_analysis"
},
{
    $group: {
        _id: "$sieve_analysis.mesh_number",
        promedio_peso_retenido: {
            $avg: "$sieve_analysis.weight_retained"
        },
        promedio_porcentaje_pasante: {
            $avg: "$sieve_analysis.percentage_passing"
        }
    }
},
{
    $sort: {
        _id: 1
    }
}
]);
