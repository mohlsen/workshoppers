var fs = require('fs'),
	arg = process.argv[2],
	fileContents,
	lineContents;

fileContents = fs.readFileSync(arg).toString();

lineContents = fileContents.split('\n');

console.log(lineContents.length-1);