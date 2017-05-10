const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');



// init app
const app = express();

//Routes
const index = require('./routes/index');

// View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Use Routes
app.use('/', index);

//Port ENV
app.listen(process.env.PORT || 5000)
