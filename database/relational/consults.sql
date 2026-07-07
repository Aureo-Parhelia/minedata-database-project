-- ============================================================================
-- SCRIPT DE CONSULTAS, FUNCIONES Y PROCEDIMIENTOS RELACIONALES (SQL)
-- ============================================================================

use MINEDATA
GO
-- 1. Cantidad de lotes por estado
select entry_status as Status,
       count(id_batch) as Total_Batches
from mineral_batch
group by entry_status
order by Total_Batches desc
go


-- 2. Tonelaje total recibido por zona de origen
select g.origin_zone as Zone,
       count(mr.id_reception) as Total_Receptions,
       sum(mr.total_weight_tons) as Total_Tons
from ganga as g
left join mineral_reception as mr on g.id_ganga = mr.id_ganga
group by g.origin_zone
order by Total_Tons desc
go


-- 3. Lotes cuyo peso supera el promedio general
select batch_code as Batch_Code,
       batch_weight_tons as Weight_Tons,
       entry_status as Status
from mineral_batch
where batch_weight_tons > (
    select avg(batch_weight_tons) from mineral_batch
)
order by batch_weight_tons desc
go


-- 4. Trabajadores y cantidad de procesos operados
select w.first_name as First_Name,
       w.last_name as Last_Name,
       p.position_name as Position,
       count(mp.id_process) as Total_Processes
from worker as w
inner join position as p on w.id_position = p.id_position
left join metallurgical_process as mp on w.id_worker = mp.id_worker
group by w.first_name, w.last_name, p.position_name
order by Total_Processes desc
go


-- 5. Equipos que registraron mediciones fuera de rango
select oe.equipment_code as Equip_Code,
       oe.equipment_name as Equip_Name,
       oe.status as Status
from operation_equipment as oe
where oe.id_equipment in (
    select distinct mp.id_equipment
    from metallurgical_process as mp
    inner join process_measurement as pm on mp.id_process = pm.id_process
    where pm.is_out_range = 1
)
go


-- 6. Analisis de laboratorio rechazados
select la.analysis_code as Analysis_Code,
       la.mineral_grade_porcentage as Grade_Pct,
       la.analysis_date as Analysis_Date,
       ms.sample_code as Sample_Code
from laboratory_analysis as la
inner join mineral_sample as ms on la.id_sample = ms.id_sample
where la.status = 'rejected'
order by la.analysis_date desc
go


-- 7. Concentrado producido por mes para un anio dado
create view VConcentrateByMonth
as
select year(mp.start_date_time) as yr,
       month(mp.start_date_time) as mth,
       sum(c.weight_tons) as total_tons,
       avg(c.purity_percentage) as avg_purity
from metallurgical_process as mp
inner join concentrate as c on mp.id_process = c.id_process
group by year(mp.start_date_time), month(mp.start_date_time)
go

create function fn_ConcentrateByMonth(@yr int)
returns table
as
return (
    select mth as Month_Num,
           total_tons as Total_Tons,
           avg_purity as Avg_Purity_Pct
    from VConcentrateByMonth
    where yr = @yr
)
go

select * from dbo.fn_ConcentrateByMonth(2025) order by Month_Num
go


-- 8.Lote con mayor peso por zona de origen
create view VBatchByZone
as
select g.origin_zone as zone,
       mb.batch_code as batch_code,
       mb.batch_weight_tons as weight_tons
from mineral_batch as mb
inner join mineral_reception as mr on mb.id_reception = mr.id_reception
inner join ganga as g on mr.id_ganga = g.id_ganga
go

select zone as Zone,
       batch_code as Batch_Code,
       weight_tons as Weight_Tons
from VBatchByZone
where weight_tons = (
    select max(weight_tons) from VBatchByZone
)
go


-- 9. Lotes sin ninguna muestra registrada
select mb.id_batch as Batch_Id,
       mb.batch_code as Batch_Code,
       mb.entry_status as Status
from mineral_batch as mb
where not exists (
    select 1
    from mineral_sample as ms
    where ms.id_batch = mb.id_batch
)
go


-- 10. Equipo con mayor cantidad de procesos ejecutados
create view VProcessByEquip
as
select oe.equipment_code as equip_code,
       oe.equipment_name as equip_name,
       count(mp.id_process) as total_proc
from operation_equipment as oe
inner join metallurgical_process as mp on oe.id_equipment = mp.id_equipment
group by oe.equipment_code, oe.equipment_name
go

select equip_code as Equip_Code,
       equip_name as Equip_Name,
       total_proc as Total_Processes
from VProcessByEquip
where total_proc = (
    select max(total_proc) from VProcessByEquip
)
go


-- 11. Funcion escalar: clasificar trabajador segun procesos operados
create function fn_WorkerLevel(@id_worker int)
returns varchar(20)
as
begin
    declare @total int
    declare @level varchar(20)

    select @total = count(id_process)
    from metallurgical_process
    where id_worker = @id_worker

    if (@total >= 10)
    begin
        set @level = 'Senior'
    end
    if (@total >= 4 and @total < 10)
    begin
        set @level = 'Regular'
    end
    if (@total < 4)
    begin
        set @level = 'Junior'
    end

    return @level
end
go


select id_worker, first_name, last_name,
        dbo.fn_WorkerLevel(id_worker) as Level
from worker
go



-- 12. Procesos y toneladas de concentrado por anio
create view VConcentrateByYear
as
select year(mp.start_date_time) as yr,
       count(c.id_concentrate) as total_proc,
       sum(c.weight_tons) as total_tons,
       avg(c.purity_percentage) as avg_purity
from metallurgical_process as mp
inner join concentrate as c on mp.id_process = c.id_process
group by year(mp.start_date_time)
go

create function fn_ConcentrateByYear(@yr int)
returns table
as
return (
    select yr as Year,
           total_proc as Total_Processes,
           total_tons as Total_Tons,
           avg_purity as Avg_Purity_Pct
    from VConcentrateByYear
    where yr = @yr
)
go


select * from dbo.fn_ConcentrateByYear(2024)
go


-- 13. Resumen de muestras y análisis por lote mineral
select mb.id_batch as Batch_Id,
       mb.batch_code as Batch_Code,
       count(distinct ms.id_sample) as Total_Samples,
       count(la.id_analysis) as Total_Analysis
from mineral_batch as mb
left join mineral_sample as ms on mb.id_batch = ms.id_batch
left join laboratory_analysis as la on ms.id_sample = la.id_sample
group by mb.id_batch, mb.batch_code
order by Total_Analysis desc, Total_Samples desc
go


-- 14. Muestras sin analisis de laboratorio
select ms.id_sample as Sample_Id,
       ms.sample_code as Sample_Code,
       mb.batch_code as Batch_Code
from mineral_sample as ms
inner join mineral_batch as mb on ms.id_batch = mb.id_batch
where not exists (
    select 1
    from laboratory_analysis as la
    where la.id_sample = ms.id_sample
)
order by ms.id_sample
go


-- 15. Procedure para cambiar el estado de un equipo de maintenance a active
create procedure sp_ActivateEquipment
    @id_equipment int
as
begin
    if not exists (
        select 1
        from operation_equipment
        where id_equipment = @id_equipment
    )
    begin
        print 'The equipament not exist'
        return
    end

    if exists (
        select 1
        from operation_equipment
        where id_equipment = @id_equipment
          and status = 'active'
    )
    begin
        print 'The device has already been switched to active'
        return
    end

    if exists (
        select 1
        from operation_equipment
        where id_equipment = @id_equipment
          and status = 'maintenance'
    )
    begin
        update operation_equipment
        set status = 'active'
        where id_equipment = @id_equipment

        print 'Device successfully updated to active.'
        return
    end

    if exists (
        select 1
        from operation_equipment
        where id_equipment = @id_equipment
    )
    begin
        print 'The equipment is not undergoing maintenance.'
        return
    end
end
go


