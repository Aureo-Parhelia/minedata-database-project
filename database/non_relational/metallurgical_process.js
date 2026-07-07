use("MINEDATA_SOLUTION"); 

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
