const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');



// init app
const app = express();

//Helmet Sec Middleware
app.use(helmet());

//compression
app.use(compression());

//Routes
const index = require('./routes/index');

// View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
const cacheTime = 86400000*7;
app.use(express.static(path.join(__dirname, 'public', {maxAge: "7d"})));

//Use Routes
app.use('/', index);

//Port ENV
app.listen(process.env.PORT || 5000)
