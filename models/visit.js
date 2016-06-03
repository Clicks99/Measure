var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var visitSchema = new Schema({
  uid: [Schema.Types.ObjectId],
  country: String,
  medium: String,
  source: String,
  campaign: String
}, { collection: 'visits' });

var Visit = mongoose.model('Visit', visitSchema);
module.exports = Visit;
