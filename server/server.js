'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
var passport = require('passport');
var winston = require('winston');
var logger = require('morgan');
var items = require('./routes/items');
var users = require('./routes/users');


// Body Parser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./config/passport')(passport);
app.use(passport.initialize());

app.use('/api/items', items);
app.use('/api/users', users)


app.listen(3000, function() {
  winston.log('info', `Server is listening on port ${PORT}`);
});
