create database nodedb;
use nodedb;
create table if not exists people(id int not null auto_increment, name varchar(50), primary key(id));