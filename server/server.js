'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
var winston = require('winston');
var logger = require('morgan');
var items = require('./routes/items');


// Body Parser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', items);


app.listen(3000, function() {
  winston.log('info', `Server is listening on port ${PORT}`);
});
