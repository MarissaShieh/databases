CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  ID int NOT NULL AUTO_INCREMENT,
  userid INT(20) NOT NULL,
  text VARCHAR(20) NOT NULL,
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (userid) REFERENCES user(ID)
);


/* Create other tables and define schemas for them here! */
CREATE TABLE  user (
  ID int NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY (ID)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

