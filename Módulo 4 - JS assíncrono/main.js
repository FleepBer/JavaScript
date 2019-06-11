axios.get('https://api.github.com/users/FleepBer')
	.then(function(response) {
		console.log(response);
	} )
	
	.catch(function(error) {
		console.warn(error);
	});