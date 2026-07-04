use MINEDATA_NOTSQL;

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
