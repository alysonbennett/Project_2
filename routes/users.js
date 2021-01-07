const express = require('express');
const router = express.Router();
var db=require('../database');

var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

// Login Page
router.get('/login', (req, res) => res.render('login'));

//register page

router.get('/register', (request, response) => {
  response.render('register');
});

router.get('/reservation', (request, response) => {
  response.render('reservation');
});

//ROUTE FOR REGISTERING USER
router.post('/register', urlencodedParser, function(req, res, next) {
  
  // store all the user input data
//   const userDetails=req.body;
 
  var ownerName = req.body.ownerName;
  var email = req.body.email;
  var password = req.body.password;
  
  
 var sql = `INSERT INTO Users (ownerName, email, password) VALUES ('${ownerName}', '${email}', '${password}')`;
 db.query(sql,function (err, data) {
    if (err) throw err;
         console.log("record inserted");
     });
 res.redirect('/users/login');
});

//ROUTE FOR REGISTERING PETS
router.post('/dashboard', urlencodedParser, function(req, res, next) {
  
  // store all the user input data
//   const userDetails=req.body;
 
  var name = req.body.name;
  var age = req.body.age;
  var gender = req.body.gender;
  var weight = req.body.weight;
  var breed = req.body.breed;
  var energy = req.body.energy;
  var allergies = req.body.allergies;
  var medications = req.body.medications
  var other = req.body.other;
  
  
 var sql = `INSERT INTO Pets (name, age, gender, weight, breed, energy, allergies, medications, other) VALUES ('${name}', '${age}', '${gender}', '${weight}', '${breed}', '${energy}', '${allergies}', '${medications}', '${other}')`;
 db.query(sql,function (err, data) {
    if (err) throw err;
         console.log("record inserted");
     });
 res.redirect('/users/login');
});

//ROUTE FOR CREATING RESERVATION
router.post('/reservation', urlencodedParser, function(req, res, next) {
  
  // store all the user input data
//   const userDetails=req.body;
 
  var date = req.body.date;
  var time = req.body.time;
  
  
 var sql = `INSERT INTO Reservations (date, time) VALUES ('${date}', '${time}')`;
 db.query(sql,function (err, data) {
    if (err) throw err;
         console.log("record inserted");
     });
 res.redirect('/users/reservation');
});

module.exports = router;