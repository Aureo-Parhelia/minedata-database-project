// ============================================================
// SCRIPT DE VALIDACIÓN: ENFOQUE NO RELACIONAL (MONGODB)
// ============================================================

use MINEDATA_NOTSQL;

// 1. COLECCIÓN: mineral_batch
db.createCollection("mineral_batch", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "mineral_batch",
            "properties": {
                "_id": { "bsonType": "objectId" },
                "batch_code": { "bsonType": "string", "description": "Código correlativo único del lote" },
                "batch_weight_tons": { "bsonType": "double" },
                "entry_status": { "bsonType": "string" },
                "ganga": {
                    "bsonType": "object",
                    "properties": {
                        "id_ganga": { "bsonType": "int" },
                        "mineral_name": { "bsonType": "string" }
                    },
                    "additionalProperties": false,
                    "required": ["id_ganga", "mineral_name"]
                },
                "mineral_reception": {
                    "bsonType": "object",
                    "properties": {
                        "id_reception": { "bsonType": "int" },
                        "reception_date": { "bsonType": "date" } 
                    "additionalProperties": false,
                    "required": ["id_reception", "reception_date"]
                },
                "id_batch": { "bsonType": "int" }
            },
            "additionalProperties": false,
            "required": ["batch_code", "batch_weight_tons", "entry_status", "ganga", "mineral_reception", "id_batch"]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});

// 2. COLECCIÓN: laboratory_analysis
db.createCollection("laboratory_analysis", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "laboratory_analysis",
            "properties": {
                "_id": { "bsonType": "objectId" },
                "id_analysis": { "bsonType": "int" },
                "analysis_code": { "bsonType": "string" },
                "analysis_date": { "bsonType": "date" },
                "id_batch": { "bsonType": "int" },
                "sieve_analysis": {
                    "bsonType": "array",
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "mesh_number": { "bsonType": "string" },
                            "weight_retained": { "bsonType": "double" },
                            "percentage_passing": { "bsonType": "double" }
                        },
                        "additionalProperties": false,
                        "required": ["mesh_number", "weight_retained", "percentage_passing"]
                    }
                }
            },
            "additionalProperties": false,
            "required": ["id_analysis", "analysis_code", "analysis_date", "id_batch", "sieve_analysis"]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});

// 3. COLECCIÓN: metallurgical_process
db.createCollection("metallurgical_process", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "metallurgical_process",
            "properties": {
                "_id": { "bsonType": "objectId" },
                "id_process": { "bsonType": "int" },
                "start_date_time": { "bsonType": "date" },
                "end_date_time": { "bsonType": "date" },
                "worker": {
                    "bsonType": "object",
                    "properties": {
                        "id_worker": { "bsonType": "int" },
                        "first_name": { "bsonType": "string" },
                        "last_name": { "bsonType": "string" }
                    },
                    "additionalProperties": false,
                    "required": ["id_worker", "first_name", "last_name"]
                },
                "operation_equipment": {
                    "bsonType": "object",
                    "properties": {
                        "id_equipment": { "bsonType": "int" },
                        "equipment_code": { "bsonType": "string" },
                        "equipment_name": { "bsonType": "string" }
                    },
                    "additionalProperties": false,
                    "required": ["id_equipment", "equipment_code", "equipment_name"]
                },
                "process_measurement": {
                    "bsonType": "array",
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "id_measurement": { "bsonType": "int" },
                            "recorded_value": { "bsonType": "double" },
                            "measurement_time": { "bsonType": "date" },
                            "is_out_range": { "bsonType": "bool" }
                        },
                        "additionalProperties": false,
                        "required": ["id_measurement", "recorded_value", "measurement_time", "is_out_range"]
                    }
                },
                "id_batch": { "bsonType": "int" }
            },
            "additionalProperties": false,
            "required": ["id_process", "start_date_time", "end_date_time", "worker", "operation_equipment", "process_measurement", "id_batch"]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});
