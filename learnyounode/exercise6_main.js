var mymodule = require('./exercise6_module.js'),
	directoryName = process.argv[2],
	fileExtension = process.argv[3];

mymodule(directoryName, fileExtension, function(err, data) {
	if (err) {
		console.log(err);
	} else {
		for (i = 0; i < data.length; i++) {
			console.log(data[i]);
		}
	}
});


