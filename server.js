var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var index = require('./routes/index');
var items = require('./routes/items');

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Static
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', items);


var port = 3000;

app.listen(port, function(){
    console.log('Server is listening on port '+port);
});
