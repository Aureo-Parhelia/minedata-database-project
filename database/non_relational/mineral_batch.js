
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
