DROP DATABASE IF EXISTS happy_paws;

CREATE DATABASE happy_paws;

USE happy_paws;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR (50) NOT NULL UNIQUE,
    password VARCHAR (255) NOT NULL,
    name VARCHAR (255) NOT NULL,
    phone INT NOT NULL,
    email VARCHAR (255) NOT NULL,
    pet
);

CREATE TABLE pets (
name
age
sex/spayed/neutered
weight
breed
allergies
medications
energy level (scale or options)
temperment
other details (empty text box)
);

CREATE TABLE reservations (
date 
drop off time
food (how often and how much)
walking (how often and how much) 
);