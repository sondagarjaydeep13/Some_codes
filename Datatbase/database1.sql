use list;
create table table1(
number int not null ,
name varchar(52),
age int,
primary key(number)
);
select*from table1;
insert into table1(number,name,age)
values (1,'Raj',21),
(2,'Mahesh',25),
(3,'Chetan',22);

create table table2(
number int primary key,
fees int
);
insert into table2(number,fees)
values(1,5200),
(2,5685),
(3,7854);
select*from table2;

create table  table3(
degree varchar(10),
location varchar(12),
number int,foreign key(number) references table2(number));

select*from table3;
