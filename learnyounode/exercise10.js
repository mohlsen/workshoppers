var net  = require('net'),
	port = process.argv[2],
	server = net.createServer(function (socket) {
  
		var date = new Date(),
			month = date.getMonth() + 1
			data = "";

		if (month < 10) {
			month = '0' + month;
		}

		data =  date.getFullYear() + '-' + 
				month + '-' + 
				date.getDate() + ' ' + 
				date.getHours() + ':' + 
				date.getMinutes() + 
				'\n';

		socket.end(data);

	});

server.listen(port);

