let depth = 0;

async function inlineBreakpoints() {
	await timeout();
}

function timeout() {
	return new Promise((resolve) => setTimeout(resolve, 5000));
}

module.exports = {
	inlineBreakpoints
}