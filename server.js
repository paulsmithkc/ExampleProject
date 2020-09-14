// initialize environment variables
require('dotenv').config();

// import libraries
const debug = require('debug')('app:server');
const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');

// create application
const app = express();
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

// routes
app.get('/', (req, res) => res.render('home', { title: 'Home Page' }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Contact Form' }));

// static files
app.use(express.static('public'));

// start app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => debug(`Server started on port ${PORT}`));
