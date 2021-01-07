const mysql = require('mysql')
const express = require('express');
const exphbs  = require('express-handlebars');
const usersRoutes = require('./routes/users');
const indexRoutes = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })
 
const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.engine('hbs', exphbs());
app.set('view engine', 'hbs');
 
// app.get('/', function (req, res) {
//     res.render('login');
// });

// app.get('/register', (request, response) => {
//   response.render('register');
// });

// app.get('/dashboard', (request, response) => {
//   response.render('dashboard');
// });


// require("./routes/users");
// require("./routes/index");

app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});


