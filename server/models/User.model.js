const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var UserSchema = new Schema({

  local: {
    username: {type: String},
    password: {type: String}
  },
  facebook: {
    id: {type: String},
    token: {type: String},
    email: {type: String},
    name: {type: String}
  }

});


UserSchema.pre('save', function(callback) {
  var user = this;
  if (!user.isModified('local.password')) return callback();

  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.local.password, salt, function(err, hash) {
      if (err) return callback(err);
      user.local.password = hash;
      callback();
    })
  })
})

UserSchema.methods = {
  validPassword: function(plainPassword) {
    return bcrypt.compareSync(plainPassword, this.local.password)
  }
}

module.exports = mongoose.model('User', UserSchema);
