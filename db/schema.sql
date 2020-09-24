### Schema

DROP DATABASE IF EXISTS agreeddb;

CREATE DATABASE agreeddb;
USE agreeddb;
CREATE TABLE recommended 
(
    id int NOT NULL AUTO_INCREMENT,
    movie_id INT(25) NOT NULL,
    movie_title VARCHAR(75) NOT NULL,
    host_like BOOLEAN DEFAULT false,
    guest_like BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
