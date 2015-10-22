var q = require('q'),
	defer1 = q.defer(),
	defer2 = q.defer(),
	all = function (defer1, defer2) {
		var deferred = q.defer(),
			count = 0,
			results = [],
			checkAllFulfilled = function() {
				if (count === 2) {
					deferred.resolve(results);	
				}	
			};
			
		defer1.promise.then(function(result) {
			++count;
			results[0] = result;
			checkAllFulfilled();
		}, deferred.reject);
		
		defer2.promise.then(function(result) {
			++count;
			results[1] = result;
			checkAllFulfilled();	
		}, deferred.reject)
		
		return deferred.promise;
	};
	
all(defer1, defer2).then(console.log);
	
setTimeout(function() {
	defer1.resolve("PROMISES");
	defer2.resolve("FTW");
}, 200);

/* bonus 1 */
// q.all([defer1.promise, defer2.promise]).then(function(results) {
// 	console.log(results);
// });
	
/* bonus 2 */
// q.all([defer1.promise, defer2.promise]).spread(function(result1, result2) {
// 	console.log([result1, result2]);
// });