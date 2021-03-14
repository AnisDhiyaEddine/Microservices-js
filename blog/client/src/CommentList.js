import React from 'react';

export default ({ comments }) => {
	let content;
	const renderedComments = comments.map((comment) => {
		switch (comment.status) {
			case 'approved': {
				content = comment.content;
				break;
			}
			case 'rejected': {
				content = 'This comment has been rejected';
				break;
			}
			default: {
				content = 'processing comment';
			}
		}

		return <li key={comment.id}>{content}</li>;
	});

	return <ul>{renderedComments}</ul>;
};
