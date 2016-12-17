'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/Item.model');

var db = 'mongodb://test:test@ds045511.mlab.com:45511/oltex24_warehouse';
mongoose.Promise = global.Promise;
mongoose.connect(db);

// Get all items
router.get('/items', function(req, res, next) {
  Item.find()
    .then(function(data) {
      res.json(data);
    });
});

// Get single item
router.get('/item/:id', function(req, res, next) {
  var _id = req.params.id;
  Item.findById(_id, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

// Add new item
router.post('/item', function(req, res, next) {
  var item = {
    name: req.body.name,
    category: req.body.category,
    count: req.body.count
  };

  var data = new Item(item);
  data.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Delete item
router.delete('/item/:id', function(req, res, next) {
  var _id = req.params.id;
  Item.findByIdAndRemove(_id, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

// Update item
router.put('/item/:id', function(req, res, next) {
  var _id = req.params.id;
  Item.findById(_id, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      data.name = req.body.name;
      data.category = req.body.category;
      data.count = req.body.count;
      data.save();
      res.status(200).json(data);
    }
  });
});

module.exports = router;
