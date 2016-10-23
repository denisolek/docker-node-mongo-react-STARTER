var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/Item.model');

var db = 'mongodb://test:test@ds045511.mlab.com:45511/oltex24_warehouse';
mongoose.Promise = global.Promise;
mongoose.connect(db);

router.get('/items', function(req, res, next){
    Item.find()
        .then(function(data){
            res.json(data);
        });
});

module.exports = router;