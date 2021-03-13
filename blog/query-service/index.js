const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let posts = {};
app.get('/posts', (req, res) => {});

app.post('/events', (req, res) => {
	const { type } = req.body;
	switch (type) {
		case 'PostCreated': {
			const { data: { id, title } } = req.body;
			posts[id] = { id, title, comments: [] };
			break;
		}
		case 'CommentCreated': {
			const {
				data: { id, content, postId },
			} = req.body;
			posts[postId].comments.push({
				id,
				content,
				postId,
			});
			break;
		}
	}

	console.log(posts);
});

app.listen(4002, () => {
	console.log('query service up and running');
});
