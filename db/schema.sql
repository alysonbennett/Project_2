DROP DATABASE IF EXISTS happy_paws;

CREATE DATABASE happy_paws;

USE happy_paws;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username
    password
    name
    phone
    email
    address
    pet name foreign key
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