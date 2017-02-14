'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/Item.model');

// Get all items
router.get('/', function(req, res, next) {
  Item.find()
    .then(function(data) {
      res.json(data);
    });
});

// Get single item
router.get('/:id', function(req, res, next) {
  var _id = req.params.id;
  Item.findById(_id, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.json(data);
    }
  });
});

// Add new item
router.post('/', function(req, res, next) {
  req.accepts('application/json');
  var item = {
    name: req.body.name,
    category: req.body.category,
    count: req.body.count
  };

  var data = new Item(item);
  data.save(function(err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(data._id);
    }
  });
});

// Delete item
router.delete('/:id', function(req, res, next) {
  var _id = req.params.id;
  Item.findByIdAndRemove(_id, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});

// Update item
router.put('/:id', function(req, res, next) {
  req.accepts('application/json');
  var _id = req.params.id;
  Item.findById(_id, function(err, data) {
    if (err) {
      res.status(404).send();
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
