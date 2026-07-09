db.createCollection("laboratory_analysis", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "laboratory_analysis",

            properties: {
                _id: {
                    bsonType: "objectId"
                },

                analysis_code: {
                    bsonType: "string"
                },

                mineral_grade_percentage: {
                    bsonType: "decimal"
                },

                analysis_date: {
                    bsonType: "date"
                },

                status: {
                    bsonType: "string"
                },

                id_batch: {
                    bsonType: "objectId"
                },

                mineral_sample: {
                    bsonType: "object",

                    properties: {
                        sample_code: {
                            bsonType: "string"
                        },

                        extraction_date: {
                            bsonType: "date"
                        }
                    },

                    additionalProperties: false,

                    required: [
                        "sample_code",
                        "extraction_date"
                    ]
                },

                sieve_analysis: {
                    bsonType: "array",

                    items: {
                        bsonType: "object",

                        properties: {
                            mesh_number: {
                                bsonType: "string"
                            },

                            weight_retained: {
                                bsonType: "decimal"
                            },

                            percentage_passing: {
                                bsonType: "decimal"
                            }
                        },

                        additionalProperties: false,

                        required: [
                            "mesh_number",
                            "weight_retained",
                            "percentage_passing"
                        ]
                    }
                }
            },

            additionalProperties: false,

            required: [
                "analysis_code",
                "mineral_grade_percentage",
                "analysis_date",
                "status",
                "id_batch",
                "mineral_sample",
                "sieve_analysis"
            ]
        }
    },

    validationLevel: "strict",
    validationAction: "error"
});
