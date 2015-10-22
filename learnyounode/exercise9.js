var http = require('http'),
	url1 = process.argv[2],
	url2 = process.argv[3],
	url3 = process.argv[4],
	dataReceived = [undefined, undefined, undefined],
	getData = function(url, index) {
		var internalData = "";

		http.get(url, function(resp) {
			resp.setEncoding('utf8');
			resp.on('data', function(data) {
			  internalData += data;
			});
			resp.on('end', function() {
				dataReceived[index] = internalData;
				checkProgress();
			});
		});
	},
	checkProgress = function() {
		var done = true;
		dataReceived.forEach(function(item) {
			if (!item) {
				done = false;
			}
		});

		if (done) {
			completed();
		}

	},
	completed = function() {
		dataReceived.forEach(function(item) {
			console.log(item);
		});
	};

getData(url1, 0);
getData(url2, 1);
getData(url3, 2);