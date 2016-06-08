var express = require('express');
var router = express.Router();

// models
var User = require('../models/user'),
	Visit = require('../models/visit'),
	Item = require('../models/item');

/* GET Capture Every Request. */
router.get('/', function(req, res, next) {
	var params = req.query;

	Item.process(params.page, function (err, item) {
		User.process(params, req, function (err, user) {
			var opts = params;
			opts.req = req;
			opts.user = user;
			opts.item = item;

			Visit.process(opts, function (err, visit) {
				visit.hits += 1;
				visit.save();

				res.json({ success: true });
			});
		});
	});

});

module.exports = router;
