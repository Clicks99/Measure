var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  created: { type: Date, default: Date.now }
  cookie: String,
  browser: String,
  os: String,
  device: String
}, { collection: 'users' });

var User = mongoose.model('User', userSchema);
module.exports = User;
