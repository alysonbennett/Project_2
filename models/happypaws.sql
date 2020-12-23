DROP DATABASE IF EXISTS happy_paws;

CREATE DATABASE happy_paws;

USE happy_paws;

CREATE TABLE Users (
	id INT AUTO_INCREMENT,
    email VARCHAR (50) NOT NULL,
    password VARCHAR (50) NOT NULL,
    ownerName VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Pets (
	id INT AUTO_INCREMENT,
    name VARCHAR (50) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR (6) NOT NULL,
    weight INT NOT NULL,
    breed VARCHAR (50) NOT NULL,
    energy INT NOT NULL,
    allergies VARCHAR (300) NOT NULL,
    medications VARCHAR (300) NOT NULL,
    other VARCHAR (300),
    PRIMARY KEY (id)
);

CREATE TABLE Reservations (
	id INT AUTO_INCREMENT,
    date DATE NOT NULL,
    time TIME NOT NULL,
    PRIMARY KEY (id)
);


INSERT INTO Users (email, password, ownerName)
VALUES ("alysonbennett@gmail.com", "testtest", "Alyson");

INSERT INTO Pets (name, age, gender, weight, breed, energy, allergies, medications, other)
VALUES ("Frank", 8, "Male", 130, "Bullmastiff", 1, "everything", "a lot", "he's a great boy!");

INSERT INTO Reservations (date, time)
VALUES ("2020-12-22", "12:30:00");