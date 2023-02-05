create table  Exams(
Rollnumber int,
S_code varchar(10),
Marks int,
P_code varchar(12),

foreign key(RollNumber) references students(Rollno)
);
use list;

create table course(cours_id int primary key,
fees varchar(52));

insert into course(cours_id,fees)
values(1,'500'),
(2,'1000');

create table course_detail(coures_number int ,
name varchar(52),
cours_id int,foreign key(cours_id)references course(course_id));