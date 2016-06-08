var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var itemSchema = new Schema({
  url: String,
  created: { type: Date, default: Date.now }
}, { collection: 'items' });

itemSchema.statics.process = function (page, cb) {
	var self = this;
	self.findOne({ url: page }, function (err, item) {
		if (err || item) {
			return cb(err, item);
		}

		item = new self({ url: page });
		item.save(function (err, i) {
			return cb(err, i);
		});
	});
};

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
