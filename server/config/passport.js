var passport = require('passport');
var Strategy = require('passport-local').Strategy;

var User = require('../models/User.model');

module.exports = function(passport) {
  passport.use(new Strategy(
    function(username, password, done) {
      User.findOne({  'local.username': username  }).then(function(user) {
        if (!user) {
          return done(null, false, { message: 'Incorrect login.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
    ));
};
