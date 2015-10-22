var q = require('q'),
	defer = q.defer(),
	attachTitle = function(someValue) {
		return 'DR. ' + someValue;	
	};

defer.promise
	.then(attachTitle)
	.then(console.log);
		
defer.resolve("MANHATTAN");

