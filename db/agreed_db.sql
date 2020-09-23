CREATE SCHEMA agreed_db;

CREATE DATABASE agreed;

USE agreed_db;

CREATE TABLE `agreed_db`.`movie_title` (
  `movie_id` INT NOT NULL,
  `movie_name` VARCHAR(45) NULL,
  `movie_genre` VARCHAR(45) NULL,
  PRIMARY KEY (`movie_id`));




----------------------
CREATE TABLE likes (
  `likes_id` INT NOT NULL,
  `dislikes_id` int,
  PRIMARY KEY (`likes_id`));


CREATE TABLE dislikes (
  `dislikes_id` INT NOT NULL,
  `likes_id` int,
  PRIMARY KEY (`dislikes_id`));

  SELECT * FROM agreed_db;             
  ALTER TABLE likes ADD FOREIGN KEY (dislikes_id) REFERENCES dislikes(dislikes_id);
  ALTER TABLE dislikes ADD FOREIGN KEY (likes_id) REFERENCES likes(likes_id);


-------------------------
CREATE TABLE hosttable (
  `host_id` INT NOT NULL,
  `host_code` INT NOT NULL,
  `guest_code` int,
  PRIMARY KEY (`host_code`)
  );

CREATE TABLE guesttable (
  `guest_id` INT NOT NULL,
  `guest_code` INT NOT NULL,
  `host_code` int,
  PRIMARY KEY (guest_code)
  );
  
SELECT * FROM agreed_db;
ALTER TABLE guesttable ADD FOREIGN KEY (host_code) REFERENCES hosttable(host_code);
ALTER TABLE hosttable ADD FOREIGN KEY (guest_code) REFERENCES guesttable(guest_code);
