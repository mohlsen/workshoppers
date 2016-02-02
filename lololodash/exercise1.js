var _ = require("lodash");

var worker = function(thing) {
	return _.filter(thing, { 'active': true });
};

module.exports = worker;