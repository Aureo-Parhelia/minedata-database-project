-- ============================================================
-- SCRIPT DDL: BASE DE DATOS RELACIONAL (MINEDATA)
-- ============================================================

create database MINEDATA_SOLUTION 
go 

use MINEDATA_SOLUTION 
go

CREATE TABLE audit_log
(
  id_log           INT          NOT NULL IDENTITY(1,1),
  affected_table   VARCHAR(100) NOT NULL,
  operation_type   VARCHAR(20)  NOT NULL,
  old_value        VARCHAR(MAX) NOT NULL,
  new_value        VARCHAR(MAX) NOT NULL,
  action_timestamp DATETIME     NOT NULL,
  record_source    VARCHAR(50)  NOT NULL,
  id_worker        INT          NOT NULL,
  CONSTRAINT PK_audit_log PRIMARY KEY (id_log)
)
GO

CREATE TABLE concentrate
(
  id_concentrate    INT           NOT NULL IDENTITY(1,1),
  purity_percentage DECIMAL(10,2) NOT NULL,
  weight_tons       DECIMAL(10,2) NOT NULL,
  id_process        INT           NOT NULL,
  CONSTRAINT PK_concentrate PRIMARY KEY (id_concentrate)
)
GO

CREATE TABLE department
(
  id_department          INT          NOT NULL IDENTITY(1,1),
  department_name        VARCHAR(100) NOT NULL,
  department_description VARCHAR(225) NOT NULL,
  CONSTRAINT PK_department PRIMARY KEY (id_department)
)
GO

CREATE TABLE equipment_stage
(
  id_equipment INT NOT NULL,
  id_stage     INT NOT NULL,
  CONSTRAINT PK_equipment_stage PRIMARY KEY (id_equipment, id_stage)
)
GO

CREATE TABLE ganga
(
  id_ganga         INT           NOT NULL IDENTITY(1,1),
  entry_date       DATE          NOT NULL,
  description      VARCHAR(300)  NOT NULL,
  origin_zone      VARCHAR(100)  NOT NULL,
  total_weight_tons DECIMAL(10,2) NOT NULL,
  CONSTRAINT PK_ganga PRIMARY KEY (id_ganga)
)
GO

CREATE TABLE laboratory_analysis
(
  id_analysis              INT          NOT NULL IDENTITY(1,1),
  analysis_code            VARCHAR(50)  NOT NULL,
  mineral_grade_porcentage DECIMAL(5,2) NOT NULL,
  analysis_date            DATETIME     NOT NULL,
  status                   VARCHAR(30)  NOT NULL,
  id_sample                INT          NOT NULL,
  CONSTRAINT PK_laboratory_analysis PRIMARY KEY (id_analysis)
)
GO

ALTER TABLE laboratory_analysis
  ADD CONSTRAINT UQ_analysis_code UNIQUE (analysis_code)
GO

CREATE TABLE metallurgical_process
(
  id_process      INT      NOT NULL IDENTITY(1,1),
  start_date_time DATETIME NOT NULL,
  end_date_time   DATETIME NOT NULL,
  id_batch        INT      NOT NULL,
  id_worker       INT      NOT NULL,
  id_shift        INT      NOT NULL,
  id_equipment    INT      NOT NULL,
  CONSTRAINT PK_metallurgical_process PRIMARY KEY (id_process)
)
GO

CREATE TABLE mineral_batch 
(
  id_batch          INT           NOT NULL IDENTITY(1,1),
  batch_code        VARCHAR(50)   NOT NULL,
  batch_weight_tons DECIMAL(10,2) NOT NULL,
  entry_status      VARCHAR(30)   NOT NULL,
  id_reception      INT           NOT NULL,
  CONSTRAINT PK_mineral_batch PRIMARY KEY (id_batch)
)
GO

ALTER TABLE mineral_batch 
  ADD CONSTRAINT UQ_batch_code UNIQUE (batch_code)
GO

CREATE TABLE mineral_reception
(
  id_reception      INT           NOT NULL IDENTITY(1,1),
  reception_date    DATETIME      NOT NULL,
  total_weight_tons DECIMAL(10,2) NOT NULL,
  id_ganga          INT           NOT NULL,
  CONSTRAINT PK_mineral_reception PRIMARY KEY (id_reception)
)
GO

CREATE TABLE mineral_sample
(
  id_sample       INT          NOT NULL IDENTITY(1,1),
  sample_code     VARCHAR(50)  NOT NULL,
  extraction_date DATETIME     NOT NULL,
  id_batch        INT          NOT NULL,
  CONSTRAINT PK_mineral_sample PRIMARY KEY (id_sample)
)
GO

ALTER TABLE mineral_sample
  ADD CONSTRAINT UQ_sample_code UNIQUE (sample_code)
GO

CREATE TABLE operation_equipment
(
  id_equipment   INT          NOT NULL IDENTITY(1,1),
  equipment_code VARCHAR(50)  NOT NULL,
  equipment_name VARCHAR(100) NOT NULL,
  status         VARCHAR(30)  NOT NULL,
  CONSTRAINT PK_operation_equipment PRIMARY KEY (id_equipment)
)
GO

ALTER TABLE operation_equipment
  ADD CONSTRAINT UQ_equipment_code UNIQUE (equipment_code)
GO

CREATE TABLE position
(
  id_position          INT          NOT NULL IDENTITY(1,1),
  position_name        VARCHAR(100) NOT NULL,
  position_description VARCHAR(225) NOT NULL,
  id_department        INT          NOT NULL,
  CONSTRAINT PK_position PRIMARY KEY (id_position)
)
GO

CREATE TABLE process_measurement
(
  id_measurement   INT          NOT NULL IDENTITY(1,1),
  recorded_value   DECIMAL(8,2) NOT NULL,
  measurement_time DATETIME     NOT NULL,
  is_out_range     BIT          NOT NULL,
  id_process       INT          NOT NULL,
  id_parameter     INT          NOT NULL,
  CONSTRAINT PK_process_measurement PRIMARY KEY (id_measurement)
)
GO

CREATE TABLE process_parameter
(
  id_parameter    INT          NOT NULL IDENTITY(1,1),
  parameter_name  VARCHAR(50)  NOT NULL,
  unit_of_measure VARCHAR(20)  NOT NULL,
  min_value       DECIMAL(8,2) NOT NULL,
  max_value       DECIMAL(8,2) NOT NULL,
  id_stage        INT          NOT NULL,
  CONSTRAINT PK_process_parameter PRIMARY KEY (id_parameter)
)
GO

CREATE TABLE process_stage
(
  id_stage          INT          NOT NULL IDENTITY(1,1),
  stage_name        VARCHAR(100) NOT NULL,
  stage_description VARCHAR(265) NOT NULL,
  CONSTRAINT PK_process_stage PRIMARY KEY (id_stage)
)
GO

CREATE TABLE sieve_analysis
(
  id_sieve_analysis  INT          NOT NULL IDENTITY(1,1),
  mesh_number        VARCHAR(20)  NOT NULL,
  weight_retained    DECIMAL(8,2) NOT NULL,
  percentage_passing DECIMAL(5,2) NOT NULL,
  id_analysis        INT          NOT NULL,
  CONSTRAINT PK_sieve_analysis PRIMARY KEY (id_sieve_analysis)
)
GO

CREATE TABLE tailings
(
  id_tailings    INT           NOT NULL IDENTITY(1,1),
  toxicity_level VARCHAR(100)  NOT NULL,
  weight_tons    DECIMAL(20,2) NOT NULL,
  id_process     INT           NOT NULL,
  CONSTRAINT PK_tailings PRIMARY KEY (id_tailings)
)
GO

CREATE TABLE work_shift
(
  id_shift   INT          NOT NULL IDENTITY(1,1),
  shift_name VARCHAR(50)  NOT NULL,
  start_time TIME         NOT NULL,
  end_time   TIME         NOT NULL,
  CONSTRAINT PK_work_shift PRIMARY KEY (id_shift)
)
GO

CREATE TABLE worker
(
  id_worker         INT          NOT NULL IDENTITY(1,1),
  identity_document CHAR(8)      NOT NULL,
  first_name        VARCHAR(100) NOT NULL,
  last_name         VARCHAR(100) NOT NULL,
  email             VARCHAR(100) NOT NULL,
  id_position       INT          NOT NULL,
  CONSTRAINT PK_worker PRIMARY KEY (id_worker)
)
GO

ALTER TABLE worker
  ADD CONSTRAINT UQ_identity_document UNIQUE (identity_document)
GO

ALTER TABLE worker
  ADD CONSTRAINT UQ_email UNIQUE (email)
GO

ALTER TABLE worker
  ADD CONSTRAINT FK_position_TO_worker
    FOREIGN KEY (id_position)
    REFERENCES position (id_position)
GO

ALTER TABLE mineral_batch 
  ADD CONSTRAINT FK_mineral_reception_TO_mineral_batch 
    FOREIGN KEY (id_reception)
    REFERENCES mineral_reception (id_reception)
GO

ALTER TABLE metallurgical_process
  ADD CONSTRAINT FK_mineral_batch_TO_metallurgical_process
    FOREIGN KEY (id_batch)
    REFERENCES mineral_batch (id_batch)
GO

ALTER TABLE metallurgical_process
  ADD CONSTRAINT FK_worker_TO_metallurgical_process
    FOREIGN KEY (id_worker)
    REFERENCES worker (id_worker)
GO

ALTER TABLE metallurgical_process
  ADD CONSTRAINT FK_work_shift_TO_metallurgical_process
    FOREIGN KEY (id_shift)
    REFERENCES work_shift (id_shift)
GO

ALTER TABLE metallurgical_process
  ADD CONSTRAINT FK_operation_equipment_TO_metallurgical_process
    FOREIGN KEY (id_equipment)
    REFERENCES operation_equipment (id_equipment)
GO

ALTER TABLE process_parameter
  ADD CONSTRAINT FK_process_stage_TO_process_parameter
    FOREIGN KEY (id_stage)
    REFERENCES process_stage (id_stage)
GO

ALTER TABLE process_measurement
  ADD CONSTRAINT FK_metallurgical_process_TO_process_measurement
    FOREIGN KEY (id_process)
    REFERENCES metallurgical_process (id_process)
GO

ALTER TABLE process_measurement
  ADD CONSTRAINT FK_process_parameter_TO_process_measurement
    FOREIGN KEY (id_parameter)
    REFERENCES process_parameter (id_parameter)
GO

ALTER TABLE sieve_analysis
  ADD CONSTRAINT FK_laboratory_analysis_TO_sieve_analysis
    FOREIGN KEY (id_analysis)
    REFERENCES laboratory_analysis (id_analysis)
GO

ALTER TABLE audit_log
  ADD CONSTRAINT FK_worker_TO_audit_log
    FOREIGN KEY (id_worker)
    REFERENCES worker (id_worker)
GO

ALTER TABLE laboratory_analysis
  ADD CONSTRAINT FK_mineral_sample_TO_laboratory_analysis
    FOREIGN KEY (id_sample)
    REFERENCES mineral_sample (id_sample)
GO

ALTER TABLE mineral_sample
  ADD CONSTRAINT FK_mineral_batch_TO_mineral_sample
    FOREIGN KEY (id_batch)
    REFERENCES mineral_batch (id_batch)
GO

ALTER TABLE equipment_stage
  ADD CONSTRAINT FK_operation_equipment_TO_equipment_stage
    FOREIGN KEY (id_equipment)
    REFERENCES operation_equipment (id_equipment)
GO

ALTER TABLE equipment_stage
  ADD CONSTRAINT FK_process_stage_TO_equipment_stage
    FOREIGN KEY (id_stage)
    REFERENCES process_stage (id_stage)
GO

ALTER TABLE mineral_reception
  ADD CONSTRAINT FK_ganga_TO_mineral_reception
    FOREIGN KEY (id_ganga)
    REFERENCES ganga (id_ganga)
GO

ALTER TABLE concentrate
  ADD CONSTRAINT FK_metallurgical_process_TO_concentrate
    FOREIGN KEY (id_process)
    REFERENCES metallurgical_process (id_process)
GO

ALTER TABLE tailings
  ADD CONSTRAINT FK_metallurgical_process_TO_tailings
    FOREIGN KEY (id_process)
    REFERENCES metallurgical_process (id_process)
GO

ALTER TABLE position
  ADD CONSTRAINT FK_department_TO_position
    FOREIGN KEY (id_department)
    REFERENCES department (id_department)
GO
