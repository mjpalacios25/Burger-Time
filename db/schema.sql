DROP DATABASE IF EXISTS burgersDB;

CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE `burgers` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `burger_name` VARCHAR( 255) NOT NULL,
  `devoured` BOOLEAN DEFAULT false,

  PRIMARY KEY ( `id` ) 
);