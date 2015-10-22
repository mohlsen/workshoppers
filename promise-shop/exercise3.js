var q = require('q');
var defer = q.defer(); 

defer.promise.then(console.log, console.log);

setTimeout(function () {
	defer.resolve("I FIRED");
}, 100)

setTimeout(function () {
	defer.reject('I DID NOT FIRE');
}, 200)
