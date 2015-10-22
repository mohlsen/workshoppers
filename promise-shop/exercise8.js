var q = require('q'),
	throwMyGod = function() {
		throw new Error('OH NOES');
	},
	iterate	= function(i) {
		console.log(i);
		return ++i;
	};
	
q.fcall(iterate, 1)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(throwMyGod)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(null, console.log);						