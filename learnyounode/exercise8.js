var http = require('http'),
	url = process.argv[2],
	dataReceived = "";

http.get(url, function(resp) {
	resp.setEncoding('utf8');
	resp.on('data', function(data) {
	  dataReceived += data;
	});
	resp.on('end', function() {
		console.log(dataReceived.length);
		console.log(dataReceived);
	});
});
