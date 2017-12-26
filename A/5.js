module.exports = (a) => {
	return new Promise( (resolve,reject) => {
		setTimeout( () => {
			if((typeof a) == "string") resolve(true);
			else resolve(false);
		}, 1000);
	});
}