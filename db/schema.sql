CREATE DATABASE recipes_db;
USE recipes_db;

CREATE TABLE recipes 
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
    category varchar (17) NOT NULL,
    author varchar(40) NOT NULL,
    URL varchar() NOT NULL,
    description varchar (400) NOT NULL,
	comments varchar (400) NOT NULL,
    preparationTime varchar (10) NOT NULL,
    ingredients varchar (400) not null,
    PRIMARY KEY(id)
);
CREATE TABLE login 
(
	id int NOT NULL AUTO_INCREMENT,
    username varchar (40) NOT NULL,
    pass word varchar (20) NOT NULL,
    PRIMARY KEY(id)
    
	
);
CREATE TABLE signup
(
	id int NOT NULL auto_increment,
	fullname varchar (40) NOT NULL,
    email varchar (60) NOT NULL,
    PRIMARY KEY(id)
);