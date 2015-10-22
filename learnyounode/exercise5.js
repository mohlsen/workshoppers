var fs = require('fs'),
    path = require('path'),
	directoryName = process.argv[2],
	fileExtension = process.argv[3],
	i;

fs.readdir(directoryName, function (error, files) {

	if (error) {
		return undefined;	
	}

	for (i = 0; i < files.length; i++) {
		if (path.extname([files[i]]).replace('.','') === fileExtension) {
			console.log(files[i]);
		}
	}
});