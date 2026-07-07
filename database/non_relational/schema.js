// ============================================================
// SCRIPT DE VALIDACIÓN: ENFOQUE NO RELACIONAL (MONGODB)
// ============================================================
use("MINEDATA_SOLUTION"); 

db.createCollection("mineral_batch", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "mineral_batch",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "batch_code": {
                    "bsonType": "string"
                },
                "batch_weight_tons": {
                    "bsonType": "double"
                },
                "entry_status": {
                    "bsonType": "string"
                },
                "ganga": {
                    "bsonType": "object",
                    "properties": {
                        "id_ganga": {
                            "bsonType": "string"
                        },
                        "description": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "mineral_reception": {
                    "bsonType": "object",
                    "properties": {
                        "id_reception": {
                            "bsonType": "int"
                        },
                        "reception_date": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false,
            "required": [
                "batch_weight_tons",
                "entry_status",
                "ganga",
                "mineral_reception"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("metallurgical_process", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "metallurgical_process",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "start_date_time": {
                    "bsonType": "date"
                },
                "end_date_time": {
                    "bsonType": "date"
                },
                "worker": {
                    "bsonType": "object",
                    "properties": {
                        "id_worker": {
                            "bsonType": "int"
                        },
                        "first_name": {
                            "bsonType": "string"
                        },
                        "last_name": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "operation_equipament": {
                    "bsonType": "object",
                    "properties": {
                        "id_equipment": {
                            "bsonType": "int"
                        },
                        "equipment_code": {
                            "bsonType": "string"
                        },
                        "equipment_name": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "process_measurement": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": [
                        {
                            "bsonType": "int"
                        },
                        {
                            "bsonType": "double"
                        },
                        {
                            "bsonType": "date"
                        },
                        {
                            "bsonType": "binData"
                        }
                    ]
                },
                "process_parameter": {
                    "bsonType": "object",
                    "properties": {
                        "parameter_name": {
                            "bsonType": "string"
                        },
                        "unit_of_measure": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "id_batch": {
                    "bsonType": "int"
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});




db.createCollection("laboratory_analysis", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "laboratory_analysis",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "analysis_code": {
                    "bsonType": "string"
                },
                "analysis_date": {
                    "bsonType": "date"
                },
                "batch_code": {
                    "bsonType": "string"
                },
                "sieve_analysis": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": [
                        {
                            "bsonType": "string"
                        },
                        {
                            "bsonType": "double"
                        },
                        {
                            "bsonType": "string"
                        }
                    ]
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
