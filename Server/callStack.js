let depth = 0;

function level1() {
	++depth;

	level2();
}

function level2() {
	++depth;

	level3();
}

function level3() {
	++depth;

	level4();
}

function level4() {
	++depth;

	level5();
}

function level5() {
	++depth;

	level6();
}

function level6() {
	++depth;

	console.log('At level 6');
}

module.exports = {
	level1
}