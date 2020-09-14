// initialize environment variables
require('dotenv').config();

// import libraries
const debug = require('debug')('app:server');
const path = require('path');
const express = require('express');

// create application
const app = express();

// routes
app.use(express.static('public'));

// start app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => debug(`Server started on port ${PORT}`));