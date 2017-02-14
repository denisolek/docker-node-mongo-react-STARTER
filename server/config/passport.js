var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var User = require('../models/User.model');

module.exports = function(passport) {
  passport.use(new LocalStrategy(
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

    passport.use(new FacebookStrategy({
    clientID: '1754802844848360',
    clientSecret: 'a95eb169b464e5b785cab03687e75bfd',
    callbackURL: "https://localhost:3000/api/users/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({'facebook.id':profile.id}, function(err, user) {
      if (user) {
        return cb(null, user);
      } else {
        var newUser = new User();
        newUser.facebook.id = profile.id;
        newUser.facebook.token = accessToken;
        newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;;
        newUser.facebook.email = profile.emails[0].value;

        newUser.save(function(err) {
          if (err) {
            throw err;
          } else {
            return cb(null, newUser);
          }
        });
      }
    });
  }
));
};
