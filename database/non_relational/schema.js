/*
 ============================================================
    SCRIPT DE CREACIÖN MODELO NO RELACIONAL (MongoDB)
 ============================================================
*/

use("minedata_nosql"); 

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
                    "bsonType": "decimal"
                },
                "entry_status": {
                    "bsonType": "string"
                },
                "mineral_reception": {
                    "bsonType": "object",
                    "properties": {
                        "reception_date": {
                            "bsonType": "date"
                        },
                        "description": {
                            "bsonType": "string",
                            "maxLength": 300
                        },
                        "ganga": {
                            "bsonType": "object",
                            "properties": {
                                "entry_date": {
                                    "bsonType": "date"
                                },
                                "description": {
                                    "bsonType": "string"
                                },
                                "origin_zone": {
                                    "bsonType": "string"
                                },
                                "total-wigth_tons": {
                                    "bsonType": "decimal"
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "entry_date",
                                "description",
                                "origin_zone",
                                "total-wigth_tons"
                            ]
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "reception_date",
                        "description",
                        "ganga"
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "batch_code",
                "batch_weight_tons",
                "entry_status",
                "mineral_reception"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
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
                "id_batch": {
                    "bsonType": "objectId"
                },
                "worker": {
                    "bsonType": "object",
                    "properties": {
                        "first_name": {
                            "bsonType": "string"
                        },
                        "last_name": {
                            "bsonType": "string"
                        },
                        "email": {
                            "bsonType": "string",
                            "maxLength": 100
                        },
                        "position": {
                            "bsonType": "object",
                            "properties": {
                                "position_name": {
                                    "bsonType": "string"
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "position_name"
                            ]
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "first_name",
                        "last_name",
                        "email",
                        "position"
                    ]
                },
                "work_shift": {
                    "bsonType": "object",
                    "properties": {
                        "shift_name": {
                            "bsonType": "string"
                        },
                        "start_time": {
                            "bsonType": "date"
                        },
                        "end_time": {
                            "bsonType": "date"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "shift_name",
                        "start_time",
                        "end_time"
                    ]
                },
                "operation_equipment": {
                    "bsonType": "object",
                    "properties": {
                        "equipment_code": {
                            "bsonType": "string"
                        },
                        "equipment_name": {
                            "bsonType": "string"
                        },
                        "status": {
                            "bsonType": "string",
                            "maxLength": 30
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "equipment_code",
                        "equipment_name",
                        "status"
                    ]
                },
                "concentrate": {
                    "bsonType": "object",
                    "properties": {
                        "purity_percentage": {
                            "bsonType": "decimal"
                        },
                        "weight_tons": {
                            "bsonType": "decimal"
                        }
                    },
                    "additionalProperties": false
                },
                "tailings": {
                    "bsonType": "object",
                    "properties": {
                        "toxicity_level": {
                            "bsonType": "string",
                            "maxLength": 100
                        },
                        "weight_tons": {
                            "bsonType": "decimal"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false,
            "required": [
                "start_date_time",
                "end_date_time",
                "id_batch",
                "worker",
                "work_shift",
                "operation_equipment"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
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
                "mineral_grade_porcentage": {
                    "bsonType": "decimal"
                },
                "analysis_date": {
                    "bsonType": "date"
                },
                "status": {
                    "bsonType": "string"
                },
                "id_batch": {
                    "bsonType": "objectId"
                },
                "mineral_sample": {
                    "bsonType": "object",
                    "properties": {
                        "sample_code": {
                            "bsonType": "string"
                        },
                        "extraction_date": {
                            "bsonType": "date"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "sample_code",
                        "extraction_date"
                    ]
                },
                "sieve_analysis": {
                    "bsonType": "array",
                    "additionalItems": false,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "mesh_number": {
                                "bsonType": "string"
                            },
                            "weight_retained": {
                                "bsonType": "decimal"
                            },
                            "percentage_passing": {
                                "bsonType": "decimal"
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "mesh_number",
                            "weight_retained",
                            "percentage_passing"
                        ]
                    }
                }
            },
            "additionalProperties": false,
            "required": [
                "analysis_code",
                "mineral_grade_porcentage",
                "analysis_date",
                "status",
                "id_batch",
                "mineral_sample",
                "sieve_analysis"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});
