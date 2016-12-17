'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var winston = require('winston');

var index = require('./routes/index');
var items = require('./routes/items');


// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', items);


app.listen(3000, function() {
  winston.log('info', 'Server is listening on port ' + 3000);
});
