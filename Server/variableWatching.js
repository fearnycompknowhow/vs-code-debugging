const nestedValue = {
	level1: {
		level2: {
			level3: {
				value: 0
			}
		}
	}
};

let moduleScope = 0;

function variableWatching() {
	let localScope = 0;

	for (let blockScope = 0; blockScope < 100000; ++blockScope) {
		localScope += 2;
		moduleScope += 3;
		nestedValue.level1.level2.level3.value += 1;

		let pause = true;
	}
}

module.exports = {
	variableWatching
}