const express = require('express');
const { setup } = require('./setup');

setup('Hello');

const app = express();

app.get('/helloWorld', (req, res) => {
	res.sendStatus(200);
});

app.get('/functionBreakpoint', (req, res) => {
	functionBreakpoint();

	res.sendStatus(200);
});

app.listen(3000, () => {
	console.log('App listening on port 3000!')
});