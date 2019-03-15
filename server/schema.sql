-- DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
-- DROP TABLE IF EXISTS user;
-- DROP TABLE IF EXISTS messages;

CREATE TABLE  user (
  -- ID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL
  -- PRIMARY KEY (ID)
);

CREATE TABLE messages (
  -- ID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  message VARCHAR(20) NOT NULL,
  roomname VARCHAR(20) NOT NULL
  -- PRIMARY KEY (ID),
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/