const express = require('express');
const { level1 } = require('./callStack');
const { exceptions } = require('./exceptions');
const { inlineBreakpoints } = require('./inlineBreakpoints');
const { setup } = require('./setup');
const { variableWatching } = require('./variableWatching');

setup('Hello');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.get('/helloWorld', (req, res) => {
	res.sendStatus(200);
});

let hitCount = 0;

app.get('/hitCount', (req, res) => {
	console.log(++hitCount);

	res.sendStatus(200);
});

app.get('/conditional', (req, res) => {
	res.sendStatus(200);
});

app.get('/logPoint', (req, res) => {
	res.sendStatus(200);
});

app.get('/inline', (req, res) => {
	inlineBreakpoints();

	res.sendStatus(200);
});

app.get('/exceptions', (req, res) => {
	exceptions();

	res.sendStatus(200);
});

app.get('/callStack', (req, res) => {
	level1();

	res.sendStatus(200);
});

app.get('/variableWatching', (req, res) => {
	variableWatching();

	res.sendStatus(200);
});

app.listen(3000, () => {
	console.log('App listening on port 3000!')
});