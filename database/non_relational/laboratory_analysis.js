

use("MINEDATA_SOLUTION"); 

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
