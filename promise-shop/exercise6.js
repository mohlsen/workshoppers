var q = require('q'),
	parsePromised = function(json) {
		var defer = q.defer();
		
		try {
			JSON.parse(json);
			defer.resolve('worked!');
		} catch (error) {
			defer.reject(error);
		}
		
		return defer.promise;
	};

parsePromised(process.argv[2]).then(null, console.log);