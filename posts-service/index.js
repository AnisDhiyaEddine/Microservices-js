const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
posts = {};

app.get('/posts', (req, res) => {
	res.send(posts);
});

app.post('/posts', (req, res) => {
	let id = randomBytes(4).toString('hex');
	let { title } = req.body;
	posts[id] = {
		id,
		title,
	};

	res.status(201).send(posts[id]);
});

app.listen(4000, () => {
	console.log('app up and running');
});
