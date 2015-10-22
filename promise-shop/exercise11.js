var http = require("q-io/http");
	
http.read("http://localhost:7000/")
.then(function(resp) {
	return http.read("http://localhost:7001/" + resp);
}).then(function(resp) {
	console.log(JSON.parse(resp));
});
