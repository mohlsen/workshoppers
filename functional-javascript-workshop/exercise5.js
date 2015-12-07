function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		//Use array#some and Array#every to check every user passed to your returned function 
		//exists in the array passed to the exported function.
		
		return submittedUsers.every(function(submittedValue) {
			return goodUsers.some(function(goodValue) {
				return goodValue.id === submittedValue.id;
			})
		});
	
	};
}

module.exports = checkUsersValid