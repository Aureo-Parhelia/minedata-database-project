use MINEDATA_NOTSQL;

db.createCollection("mineral_batch", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "mineral_batch",
            "properties": {
                "_id": { "bsonType": "objectId" },
                "batch_code": { "bsonType": "string" },
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
                    },
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
