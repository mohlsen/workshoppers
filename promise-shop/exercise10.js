var http = require("q-io/http"),
	promise = http.read('http://localhost:1337');
	
promise.then(function(resp) {
	console.log(JSON.parse(resp));
}, function(err) {
	console.log("error: " + err);
});
