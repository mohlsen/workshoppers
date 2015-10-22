var fs = require('fs'),
	arg = process.argv[2];

fs.readFile(arg, 'utf8', function (error, data) {

	var lineContents;

	if (error) {
		return undefined;	
	}

	lineContents = data.split('\n');
	console.log(lineContents.length-1);
});