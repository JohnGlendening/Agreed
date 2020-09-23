CREATE SCHEMA agreed_db;

CREATE DATABASE agreed;

USE agreed_db;

CREATE TABLE `agreed_db`.`movie_title` (
  `movie_id` INT NOT NULL,
  `movie_name` VARCHAR(45) NULL,
  `movie_genre` VARCHAR(45) NULL,
  PRIMARY KEY (`movie_id`));


CREATE TABLE `agreed_db`.`likes` (
  `licks_id` INT NOT NULL,
  PRIMARY KEY (`licks_id`));


CREATE TABLE `agreed_db`.`dislikes` (
  `dislicks_id` INT NOT NULL,
  PRIMARY KEY (`dislicks_id`));

CREATE TABLE `agreed_db`.`host` (
  `host_id` INT NOT NULL,
  `host_code` INT NOT NULL,
  PRIMARY KEY (`host_id`, `host_code`));


CREATE TABLE `agreed_db`.`guest` (
  `guest_id` INT NOT NULL,
  `guest_code` INT NOT NULL,
  PRIMARY KEY (`guest_id`, `guest_code`));
