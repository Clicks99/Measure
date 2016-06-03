var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var itemSchema = new Schema({
  id: [Schema.Types.ObjectId],
  url: String,
  created: { type: Date, default: Date.now }
}, { collection: 'items' });

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
