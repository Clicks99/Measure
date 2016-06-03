var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pageViewSchema = new Schema({
  vid: [Schema.Types.ObjectId],
  referer: String,
  item: Number,
  hits: Number
}, { collection: 'pageviews' });

var Pageview = mongoose.model('Pageview', pageViewSchema);
module.exports = Pageview;
