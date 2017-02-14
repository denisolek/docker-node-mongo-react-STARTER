'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.model');
var passport = require('passport');
var jwt = require('jwt-simple');
var path = require('path');
var config = require(path.join(__dirname, '/../config/config.json'));

mongoose.connect('mongodb://mongodb:27017');

// LOGIN
router.post('/token', passport.authenticate('local', {session:false}), function(req, res, next) {
  var tmpUser = {
    id: req.user._id,
    username: req.user.local.username
  }
  var token = jwt.encode(tmpUser, config.tokenSecret);
  res.json({ token: token });
})


// Get all items [TMP ROUTE]
router.get('/', function(req, res, next) {
  User.find()
    .then(function(data) {
      res.json(data);
    });
});

// Facebook Auth
router.get('/facebook', passport.authenticate('facebook', { scope : 'email' }));

router.get('/facebook/callback', passport.authenticate('facebook'), function(req, res, next) {
    var tmpUser = {
      id: req.user._id,
      name: req.user.facebook.name
    }
    var token = jwt.encode(tmpUser, config.tokenSecret);
    res.json({ token: token });
  });

// Add new user
router.post('/', function(req, res, next) {
  req.accepts('application/json');
  User.findOne({'local.username':req.body.username}, function(err, user) {
    if (user) {
      res.status(400).send('Username already in use.');
    } else {
      var newUser = new User();
      newUser.local.password = req.body.password;
      newUser.local.username = req.body.username;
      newUser.save(function(err) {
        if (err) {
          res.status(500).send();
        } else {
          res.status(201).send(newUser._id);
        }
      });
    }
  });
});

// Delete user [TMP ROUTE]
router.delete('/:id', function(req, res, next) {
  var _id = req.params.id;
  User.findByIdAndRemove(_id, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});

// Update user [TMP ROUTE]
router.put('/:id', function(req, res, next) {
  req.accepts('application/json');
  var _id = req.params.id;
  User.findById(_id, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      data.username = req.body.username;
      data.password = req.body.password;
      data.save();
      res.status(200).json(data);
    }
  });
});

module.exports = router;
