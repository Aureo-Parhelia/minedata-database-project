use MINEDATA_NOTSQL;

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
