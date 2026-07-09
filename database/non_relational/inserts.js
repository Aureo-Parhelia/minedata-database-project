/*
============================================================
Insesción de datos NOSQL - MONGO DB
============================================================
*/


use("minedata_nosql"); 
// ============================================================
// 1. MINERAL_BATCH
// ============================================================
db.mineral_batch.insertMany([
    {
        batch_code: "LOTE-2021-001",
        batch_weight_tons: NumberDecimal("1750.0"),
        entry_status: "Processed",

        mineral_reception: {
            reception_date: ISODate("2021-03-10T08:00:00Z"),
            description: "Recepcion de mineral bruto proveniente de Zona Norte TJ-01, con control de peso y verificacion visual antes del ingreso a planta concentradora",

            ganga: {
                entry_date: ISODate("2021-03-10T00:00:00Z"),
                description: "Ganga de cuarzo y silice zona norte",
                origin_zone: "Zona Norte TJ-01",
                "total-wigth_tons": NumberDecimal("1250.5")
            }
        }
    },

    {
        batch_code: "LOTE-2021-002",
        batch_weight_tons: NumberDecimal("1750.0"),
        entry_status: "Processed",

        mineral_reception: {
            reception_date: ISODate("2021-03-10T08:00:00Z"),
            description: "Recepcion de mineral bruto proveniente de Zona Norte TJ-01, con control de peso y verificacion visual antes del ingreso a planta concentradora",

            ganga: {
                entry_date: ISODate("2021-03-10T00:00:00Z"),
                description: "Ganga de cuarzo y silice zona norte",
                origin_zone: "Zona Norte TJ-01",
                "total-wigth_tons": NumberDecimal("1250.5")
            }
        }
    },

    {
        batch_code: "LOTE-2021-003",
        batch_weight_tons: NumberDecimal("2800.0"),
        entry_status: "Processed",

        mineral_reception: {
            reception_date: ISODate("2021-08-22T07:30:00Z"),
            description: "Recepcion de mineral bruto proveniente de Zona Este TJ-02, con control de peso y verificacion visual antes del ingreso a planta concentradora",

            ganga: {
                entry_date: ISODate("2021-08-22T00:00:00Z"),
                description: "Material esteril con presencia de oxidos",
                origin_zone: "Zona Este TJ-02",
                "total-wigth_tons": NumberDecimal("980.0")
            }
        }
    },

    {
        batch_code: "LOTE-2022-001",
        batch_weight_tons: NumberDecimal("2100.0"),
        entry_status: "Processed",

        mineral_reception: {
            reception_date: ISODate("2022-01-15T08:15:00Z"),
            description: "Recepcion de mineral bruto proveniente de Zona Sur TJ-03, con control de peso y verificacion visual antes del ingreso a planta concentradora",

            ganga: {
                entry_date: ISODate("2022-01-15T00:00:00Z"),
                description: "Ganga arcillosa con bajo contenido cuprico",
                origin_zone: "Zona Sur TJ-03",
                "total-wigth_tons": NumberDecimal("1540.75")
            }
        }
    },

    {
        batch_code: "LOTE-2022-002",
        batch_weight_tons: NumberDecimal("2100.0"),
        entry_status: "Processed",

        mineral_reception: {
            reception_date: ISODate("2022-01-15T08:15:00Z"),
            description: "Recepcion de mineral bruto proveniente de Zona Sur TJ-03, con control de peso y verificacion visual antes del ingreso a planta concentradora",

            ganga: {
                entry_date: ISODate("2022-01-15T00:00:00Z"),
                description: "Ganga arcillosa con bajo contenido cuprico",
                origin_zone: "Zona Sur TJ-03",
                "total-wigth_tons": NumberDecimal("1540.75")
            }
        }
    },

    {
        batch_code: "LOTE-2022-003",
        batch_weight_tons: NumberDecimal("3100.0"),
        entry_status: "Processed",

        mineral_reception: {
            reception_date: ISODate("2022-06-30T06:45:00Z"),
            description: "Recepcion de mineral bruto proveniente de Zona Norte TJ-01, con control de peso y verificacion visual antes del ingreso a planta concentradora",

            ganga: {
                entry_date: ISODate("2022-06-30T00:00:00Z"),
                description: "Material esteril trituracion secundaria",
                origin_zone: "Zona Norte TJ-01",
                "total-wigth_tons": NumberDecimal("870.25")
            }
        }
    },

    {
        batch_code: "LOTE-2022-004",
        batch_weight_tons: NumberDecimal("2500.0"),
        entry_status: "Processed",

        mineral_reception: {
            reception_date: ISODate("2022-11-05T08:00:00Z"),
            description: "Recepcion de mineral bruto proveniente de Zona Central TJ-04, con control de peso y verificacion visual antes del ingreso a planta concentradora",

            ganga: {
                entry_date: ISODate("2022-11-05T00:00:00Z"),
                description: "Ganga de caliza zona central",
                origin_zone: "Zona Central TJ-04",
                "total-wigth_tons": NumberDecimal("2100.0")
            }
        }
    },

    {
        batch_code: "LOTE-2022-005",
        batch_weight_tons: NumberDecimal("2500.0"),
        entry_status: "Processed",

        mineral_reception: {
            reception_date: ISODate("2022-11-05T08:00:00Z"),
            description: "Recepcion de mineral bruto proveniente de Zona Central TJ-04, con control de peso y verificacion visual antes del ingreso a planta concentradora",

            ganga: {
                entry_date: ISODate("2022-11-05T00:00:00Z"),
                description: "Ganga de caliza zona central",
                origin_zone: "Zona Central TJ-04",
                "total-wigth_tons": NumberDecimal("2100.0")
            }
        }
    },

    {
        batch_code: "LOTE-2023-001",
        batch_weight_tons: NumberDecimal("1900.0"),
        entry_status: "Processed",

        mineral_reception: {
            reception_date: ISODate("2023-02-18T07:00:00Z"),
            description: "Recepcion de mineral bruto proveniente de Zona Este TJ-02, con control de peso y verificacion visual antes del ingreso a planta concentradora",

            ganga: {
                entry_date: ISODate("2023-02-18T00:00:00Z"),
                description: "Esteril con presencia de pirita",
                origin_zone: "Zona Este TJ-02",
                "total-wigth_tons": NumberDecimal("1320.6")
            }
        }
    },

    {
        batch_code: "LOTE-2023-002",
        batch_weight_tons: NumberDecimal("1900.0"),
        entry_status: "Processed",

        mineral_reception: {
            reception_date: ISODate("2023-02-18T07:00:00Z"),
            description: "Recepcion de mineral bruto proveniente de Zona Este TJ-02, con control de peso y verificacion visual antes del ingreso a planta concentradora",

            ganga: {
                entry_date: ISODate("2023-02-18T00:00:00Z"),
                description: "Esteril con presencia de pirita",
                origin_zone: "Zona Este TJ-02",
                "total-wigth_tons": NumberDecimal("1320.6")
            }
        }
    }
]);


// ============================================================
// 2. METALLURGICAL_PROCESS
// ============================================================
db.metallurgical_process.insertMany([
    {
        start_date_time: ISODate("2021-03-11T07:00:00Z"),
        end_date_time: ISODate("2021-03-11T11:30:00Z"),

        id_batch: ObjectId(),

        worker: {
            first_name: "Carlos",
            last_name: "Mamani Quispe",
            email: "c.mamani@minedata.pe",

            position: {
                position_name: "Operador de Planta"
            }
        },

        work_shift: {
            shift_name: "Turno Dia",
            start_time: ISODate("1970-01-01T07:00:00Z"),
            end_time: ISODate("1970-01-01T19:00:00Z")
        },

        operation_equipment: {
            equipment_code: "EQ-001",
            equipment_name: "Chancadora de Mandibula C110",
            status: "active"
        }
    },

    {
        start_date_time: ISODate("2021-03-11T12:00:00Z"),
        end_date_time: ISODate("2021-03-11T18:00:00Z"),

        id_batch: ObjectId(),

        worker: {
            first_name: "Carlos",
            last_name: "Mamani Quispe",
            email: "c.mamani@minedata.pe",

            position: {
                position_name: "Operador de Planta"
            }
        },

        work_shift: {
            shift_name: "Turno Dia",
            start_time: ISODate("1970-01-01T07:00:00Z"),
            end_time: ISODate("1970-01-01T19:00:00Z")
        },

        operation_equipment: {
            equipment_code: "EQ-003",
            equipment_name: "Molino de Bolas 14x18",
            status: "active"
        }
    },

    {
        start_date_time: ISODate("2021-03-12T07:00:00Z"),
        end_date_time: ISODate("2021-03-12T15:00:00Z"),

        id_batch: ObjectId(),

        worker: {
            first_name: "Elena",
            last_name: "Tapara Churata",
            email: "e.tapara@minedata.pe",

            position: {
                position_name: "Operador de Planta"
            }
        },

        work_shift: {
            shift_name: "Turno Dia",
            start_time: ISODate("1970-01-01T07:00:00Z"),
            end_time: ISODate("1970-01-01T19:00:00Z")
        },

        operation_equipment: {
            equipment_code: "EQ-005",
            equipment_name: "Celda de Flotacion IF-300",
            status: "active"
        },

        concentrate: {
            purity_percentage: NumberDecimal("28.5"),
            weight_tons: NumberDecimal("420.5")
        },

        tailings: {
            toxicity_level: "low",
            weight_tons: NumberDecimal("1280.5")
        }
    },

    {
        start_date_time: ISODate("2021-04-05T07:00:00Z"),
        end_date_time: ISODate("2021-04-05T11:00:00Z"),

        id_batch: ObjectId(),

        worker: {
            first_name: "Elena",
            last_name: "Tapara Churata",
            email: "e.tapara@minedata.pe",

            position: {
                position_name: "Operador de Planta"
            }
        },

        work_shift: {
            shift_name: "Turno Dia",
            start_time: ISODate("1970-01-01T07:00:00Z"),
            end_time: ISODate("1970-01-01T19:00:00Z")
        },

        operation_equipment: {
            equipment_code: "EQ-001",
            equipment_name: "Chancadora de Mandibula C110",
            status: "active"
        }
    },

    {
        start_date_time: ISODate("2021-04-05T12:00:00Z"),
        end_date_time: ISODate("2021-04-05T19:00:00Z"),

        id_batch: ObjectId(),

        worker: {
            first_name: "Carlos",
            last_name: "Mamani Quispe",
            email: "c.mamani@minedata.pe",

            position: {
                position_name: "Operador de Planta"
            }
        },

        work_shift: {
            shift_name: "Turno Dia",
            start_time: ISODate("1970-01-01T07:00:00Z"),
            end_time: ISODate("1970-01-01T19:00:00Z")
        },

        operation_equipment: {
            equipment_code: "EQ-003",
            equipment_name: "Molino de Bolas 14x18",
            status: "active"
        }
    },

    {
        start_date_time: ISODate("2021-04-06T07:00:00Z"),
        end_date_time: ISODate("2021-04-06T16:00:00Z"),

        id_batch: ObjectId(),

        worker: {
            first_name: "Elena",
            last_name: "Tapara Churata",
            email: "e.tapara@minedata.pe",

            position: {
                position_name: "Operador de Planta"
            }
        },

        work_shift: {
            shift_name: "Turno Dia",
            start_time: ISODate("1970-01-01T07:00:00Z"),
            end_time: ISODate("1970-01-01T19:00:00Z")
        },

        operation_equipment: {
            equipment_code: "EQ-005",
            equipment_name: "Celda de Flotacion IF-300",
            status: "active"
        },

        concentrate: {
            purity_percentage: NumberDecimal("29.1"),
            weight_tons: NumberDecimal("410.2")
        },

        tailings: {
            toxicity_level: "low",
            weight_tons: NumberDecimal("1290.8")
        }
    },

    {
        start_date_time: ISODate("2022-01-16T07:00:00Z"),
        end_date_time: ISODate("2022-01-16T12:00:00Z"),

        id_batch: ObjectId(),

        worker: {
            first_name: "Carlos",
            last_name: "Mamani Quispe",
            email: "c.mamani@minedata.pe",

            position: {
                position_name: "Operador de Planta"
            }
        },

        work_shift: {
            shift_name: "Turno Dia",
            start_time: ISODate("1970-01-01T07:00:00Z"),
            end_time: ISODate("1970-01-01T19:00:00Z")
        },

        operation_equipment: {
            equipment_code: "EQ-001",
            equipment_name: "Chancadora de Mandibula C110",
            status: "active"
        }
    },

    {
        start_date_time: ISODate("2022-01-16T13:00:00Z"),
        end_date_time: ISODate("2022-01-16T19:00:00Z"),

        id_batch: ObjectId(),

        worker: {
            first_name: "Elena",
            last_name: "Tapara Churata",
            email: "e.tapara@minedata.pe",

            position: {
                position_name: "Operador de Planta"
            }
        },

        work_shift: {
            shift_name: "Turno Dia",
            start_time: ISODate("1970-01-01T07:00:00Z"),
            end_time: ISODate("1970-01-01T19:00:00Z")
        },

        operation_equipment: {
            equipment_code: "EQ-003",
            equipment_name: "Molino de Bolas 14x18",
            status: "active"
        }
    },

    {
        start_date_time: ISODate("2022-01-17T07:00:00Z"),
        end_date_time: ISODate("2022-01-17T17:00:00Z"),

        id_batch: ObjectId(),

        worker: {
            first_name: "Carlos",
            last_name: "Mamani Quispe",
            email: "c.mamani@minedata.pe",

            position: {
                position_name: "Operador de Planta"
            }
        },

        work_shift: {
            shift_name: "Turno Dia",
            start_time: ISODate("1970-01-01T07:00:00Z"),
            end_time: ISODate("1970-01-01T19:00:00Z")
        },

        operation_equipment: {
            equipment_code: "EQ-005",
            equipment_name: "Celda de Flotacion IF-300",
            status: "active"
        },

        concentrate: {
            purity_percentage: NumberDecimal("31.2"),
            weight_tons: NumberDecimal("530.8")
        },

        tailings: {
            toxicity_level: "medium",
            weight_tons: NumberDecimal("1520.2")
        }
    },

    {
        start_date_time: ISODate("2022-11-06T19:00:00Z"),
        end_date_time: ISODate("2022-11-07T01:00:00Z"),

        id_batch: ObjectId(),

        worker: {
            first_name: "Elena",
            last_name: "Tapara Churata",
            email: "e.tapara@minedata.pe",

            position: {
                position_name: "Operador de Planta"
            }
        },

        work_shift: {
            shift_name: "Turno Noche",
            start_time: ISODate("1970-01-01T19:00:00Z"),
            end_time: ISODate("1970-01-01T07:00:00Z")
        },

        operation_equipment: {
            equipment_code: "EQ-002",
            equipment_name: "Chancadora Conica HP300",
            status: "active"
        }
    }
]);


// ============================================================
// 3. LABORATORY_ANALYSIS
// ============================================================
db.laboratory_analysis.insertMany([
    {
        analysis_code: "ANA-2021-001",
        mineral_grade_porcentage: NumberDecimal("28.5"),
        analysis_date: ISODate("2021-03-13T09:00:00Z"),
        status: "approved",

        id_batch: ObjectId(),

        mineral_sample: {
            sample_code: "MUS-2021-001",
            extraction_date: ISODate("2021-03-12T10:00:00Z")
        },

        sieve_analysis: [
            {
                mesh_number: "#10",
                weight_retained: NumberDecimal("12.5"),
                percentage_passing: NumberDecimal("98.2")
            },
            {
                mesh_number: "#35",
                weight_retained: NumberDecimal("45.8"),
                percentage_passing: NumberDecimal("86.5")
            },
            {
                mesh_number: "#100",
                weight_retained: NumberDecimal("98.3"),
                percentage_passing: NumberDecimal("62.4")
            },
            {
                mesh_number: "#200",
                weight_retained: NumberDecimal("124.1"),
                percentage_passing: NumberDecimal("12.8")
            }
        ]
    },

    {
        analysis_code: "ANA-2021-002",
        mineral_grade_porcentage: NumberDecimal("27.8"),
        analysis_date: ISODate("2021-03-13T11:00:00Z"),
        status: "approved",

        id_batch: ObjectId(),

        mineral_sample: {
            sample_code: "MUS-2021-002",
            extraction_date: ISODate("2021-03-12T14:00:00Z")
        },

        sieve_analysis: [

        ]
    },

    {
        analysis_code: "ANA-2021-003",
        mineral_grade_porcentage: NumberDecimal("29.1"),
        analysis_date: ISODate("2021-04-07T09:00:00Z"),
        status: "approved",

        id_batch: ObjectId(),

        mineral_sample: {
            sample_code: "MUS-2021-003",
            extraction_date: ISODate("2021-04-06T10:00:00Z")
        },

        sieve_analysis: [

        ]
    },

    {
        analysis_code: "ANA-2022-001",
        mineral_grade_porcentage: NumberDecimal("31.2"),
        analysis_date: ISODate("2022-01-18T09:00:00Z"),
        status: "approved",

        id_batch: ObjectId(),

        mineral_sample: {
            sample_code: "MUS-2022-001",
            extraction_date: ISODate("2022-01-17T10:00:00Z")
        },

        sieve_analysis: [
            {
                mesh_number: "#10",
                weight_retained: NumberDecimal("11.9"),
                percentage_passing: NumberDecimal("97.8")
            },
            {
                mesh_number: "#35",
                weight_retained: NumberDecimal("44.2"),
                percentage_passing: NumberDecimal("85.9")
            },
            {
                mesh_number: "#100",
                weight_retained: NumberDecimal("96.5"),
                percentage_passing: NumberDecimal("61.2")
            },
            {
                mesh_number: "#200",
                weight_retained: NumberDecimal("122.3"),
                percentage_passing: NumberDecimal("13.5")
            }
        ]
    },

    {
        analysis_code: "ANA-2022-002",
        mineral_grade_porcentage: NumberDecimal("29.7"),
        analysis_date: ISODate("2022-01-18T11:30:00Z"),
        status: "approved",

        id_batch: ObjectId(),

        mineral_sample: {
            sample_code: "MUS-2022-002",
            extraction_date: ISODate("2022-01-17T14:00:00Z")
        },

        sieve_analysis: [

        ]
    },

    {
        analysis_code: "ANA-2022-003",
        mineral_grade_porcentage: NumberDecimal("24.5"),
        analysis_date: ISODate("2022-11-08T09:00:00Z"),
        status: "rejected",

        id_batch: ObjectId(),

        mineral_sample: {
            sample_code: "MUS-2022-003",
            extraction_date: ISODate("2022-11-07T11:00:00Z")
        },

        sieve_analysis: [

        ]
    },

    {
        analysis_code: "ANA-2023-001",
        mineral_grade_porcentage: NumberDecimal("33.8"),
        analysis_date: ISODate("2023-02-21T09:00:00Z"),
        status: "approved",

        id_batch: ObjectId(),

        mineral_sample: {
            sample_code: "MUS-2023-001",
            extraction_date: ISODate("2023-02-20T10:00:00Z")
        },

        sieve_analysis: [
            {
                mesh_number: "#10",
                weight_retained: NumberDecimal("10.8"),
                percentage_passing: NumberDecimal("98.5")
            },
            {
                mesh_number: "#35",
                weight_retained: NumberDecimal("43.1"),
                percentage_passing: NumberDecimal("87.2")
            },
            {
                mesh_number: "#100",
                weight_retained: NumberDecimal("95.2"),
                percentage_passing: NumberDecimal("63.1")
            },
            {
                mesh_number: "#200",
                weight_retained: NumberDecimal("119.8"),
                percentage_passing: NumberDecimal("11.9")
            }
        ]
    },

    {
        analysis_code: "ANA-2023-002",
        mineral_grade_porcentage: NumberDecimal("34.1"),
        analysis_date: ISODate("2023-02-21T11:00:00Z"),
        status: "approved",

        id_batch: ObjectId(),

        mineral_sample: {
            sample_code: "MUS-2023-002",
            extraction_date: ISODate("2023-02-20T14:00:00Z")
        },

        sieve_analysis: [

        ]
    },

    {
        analysis_code: "ANA-2023-003",
        mineral_grade_porcentage: NumberDecimal("30.6"),
        analysis_date: ISODate("2023-07-17T09:00:00Z"),
        status: "approved",

        id_batch: ObjectId(),

        mineral_sample: {
            sample_code: "MUS-2023-003",
            extraction_date: ISODate("2023-07-16T11:00:00Z")
        },

        sieve_analysis: [

        ]
    },

    {
        analysis_code: "ANA-2023-004",
        mineral_grade_porcentage: NumberDecimal("32.4"),
        analysis_date: ISODate("2023-12-04T09:00:00Z"),
        status: "approved",

        id_batch: ObjectId(),

        mineral_sample: {
            sample_code: "MUS-2023-004",
            extraction_date: ISODate("2023-12-03T10:00:00Z")
        },

        sieve_analysis: [

        ]
    }
]);
