var mongoose = require('mongoose');
var Schema = mongoose.Schema,
	Item = require('./item'),
	Visit = require('./visit');

// create a schema
var userSchema = new Schema({
  created: { type: Date, default: Date.now },
  cookie: String,
  browser: String,
  os: String,
  device: String
}, { collection: 'users' });

userSchema.statics.process = function (opts, req, cb) {
	var self = this;
	self.findOne({ cookie: opts.cookie }, function (err, user) {
		if (err || user) {
			return cb(err, user);
		}

		user = new self({
			cookie: opts.cookie,
			browser: opts.browser.name,
			os: opts.os.name,
			device: opts.device.type
		});

		user.save(function (err, u) {
			return cb(err, u);
		});
	});
};

var User = mongoose.model('User', userSchema);
module.exports = User;
