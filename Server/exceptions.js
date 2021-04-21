function exceptions() {
	try {
		throw new Error('My Caught Exception');
	}
	catch (error) {
		console.log(error);
	}

	throw new Error('My Uncaught Exception');
}

module.exports = {
	exceptions
}