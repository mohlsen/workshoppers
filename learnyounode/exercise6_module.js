module.exports = function(directoryName, fileExtension, callback) {

	var fs = require('fs'),
	    path = require('path'),
		foundFiles = [],
		i;

	fs.readdir(directoryName, function (error, files) {

		if (error) {
			return callback(error);	
		}

		for (i = 0; i < files.length; i++) {
			if (path.extname([files[i]]).replace('.','') === fileExtension) {
				foundFiles.push(files[i])
			}
		}

		callback(null, foundFiles);
	});
};