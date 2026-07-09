db.createCollection("mineral_batch", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "mineral_batch",
            properties: {
                _id: {
                    bsonType: "objectId"
                },

                batch_code: {
                    bsonType: "string"
                },

                batch_weight_tons: {
                    bsonType: "decimal"
                },

                entry_status: {
                    bsonType: "string"
                },

                mineral_reception: {
                    bsonType: "object",

                    properties: {
                        reception_date: {
                            bsonType: "date"
                        },

                        description: {
                            bsonType: "string",
                            maxLength: 300
                        },

                        ganga: {
                            bsonType: "object",

                            properties: {
                                entry_date: {
                                    bsonType: "date"
                                },

                                description: {
                                    bsonType: "string"
                                },

                                origin_zone: {
                                    bsonType: "string"
                                },

                                total_weight_tons: {
                                    bsonType: "decimal"
                                }
                            },

                            additionalProperties: false,

                            required: [
                                "entry_date",
                                "description",
                                "origin_zone",
                                "total_weight_tons"
                            ]
                        }
                    },

                    additionalProperties: false,

                    required: [
                        "reception_date",
                        "description",
                        "ganga"
                    ]
                }
            },

            additionalProperties: false,

            required: [
                "batch_code",
                "batch_weight_tons",
                "entry_status",
                "mineral_reception"
            ]
        }
    },

    validationLevel: "strict",
    validationAction: "error"
});
