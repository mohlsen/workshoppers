var sum = 0,
	arg;

if (process.argv.length > 2) {

	for (var i = 2; i < process.argv.length; i++) {

		arg = Number(process.argv[i]);
		
		if (arg) {
			sum += arg;
		}
	}
}

console.log(sum);