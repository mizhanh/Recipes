DROP database recipes;

CREATE database recipes;

USE recipes;

CREATE table recipes (
item_id int not null primary key,
product_name varchar(45) not null,
department_name varchar(45) not null,
price decimal(2) not null,
stock_quantity int not null
);