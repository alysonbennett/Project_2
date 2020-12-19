DROP DATABASE IF EXISTS happy_paws;

CREATE DATABASE happy_paws;

USE happy_paws;

INSERT INTO Users (email, password, ownerName)
VALUES ("alysonbennett@gmail.com", "testtest", "Alyson");

INSERT INTO Pets (name, age, gender, weight, breed, energy, allergies, mediations, other)
VALUES ("Frank", 8, "Male", 130, "Bullmastiff", 1, "everything", "a lot", "he's a great boy!");

INSERT INTO Reservations (date, time)
VALUES ("12/19/2020", "12:30:00")