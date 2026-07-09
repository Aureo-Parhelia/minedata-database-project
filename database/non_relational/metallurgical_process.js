db.createCollection("metallurgical_process", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "metallurgical_process",

            properties: {
                _id: {
                    bsonType: "objectId"
                },

                start_date_time: {
                    bsonType: "date"
                },

                end_date_time: {
                    bsonType: "date"
                },

                id_batch: {
                    bsonType: "objectId"
                },

                worker: {
                    bsonType: "object",

                    properties: {
                        first_name: {
                            bsonType: "string"
                        },

                        last_name: {
                            bsonType: "string"
                        },

                        email: {
                            bsonType: "string",
                            maxLength: 100
                        },

                        position: {
                            bsonType: "object",

                            properties: {
                                position_name: {
                                    bsonType: "string"
                                }
                            },

                            additionalProperties: false,

                            required: [
                                "position_name"
                            ]
                        }
                    },

                    additionalProperties: false,

                    required: [
                        "first_name",
                        "last_name",
                        "email",
                        "position"
                    ]
                },

                work_shift: {
                    bsonType: "object",

                    properties: {
                        shift_name: {
                            bsonType: "string"
                        },

                        start_time: {
                            bsonType: "date"
                        },

                        end_time: {
                            bsonType: "date"
                        }
                    },

                    additionalProperties: false,

                    required: [
                        "shift_name",
                        "start_time",
                        "end_time"
                    ]
                },

                operation_equipment: {
                    bsonType: "object",

                    properties: {
                        equipment_code: {
                            bsonType: "string"
                        },

                        equipment_name: {
                            bsonType: "string"
                        },

                        status: {
                            bsonType: "string",
                            maxLength: 30
                        }
                    },

                    additionalProperties: false,

                    required: [
                        "equipment_code",
                        "equipment_name",
                        "status"
                    ]
                },

                concentrate: {
                    bsonType: "object",

                    properties: {
                        purity_percentage: {
                            bsonType: "decimal"
                        },

                        weight_tons: {
                            bsonType: "decimal"
                        }
                    },

                    additionalProperties: false
                },

                tailings: {
                    bsonType: "object",

                    properties: {
                        toxicity_level: {
                            bsonType: "string",
                            maxLength: 100
                        },

                        weight_tons: {
                            bsonType: "decimal"
                        }
                    },

                    additionalProperties: false
                }
            },

            additionalProperties: false,

            required: [
                "start_date_time",
                "end_date_time",
                "id_batch",
                "worker",
                "work_shift",
                "operation_equipment"
            ]
        }
    },

    validationLevel: "strict",
    validationAction: "error"
});
