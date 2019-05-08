require('es6-promise').polyfill();
require('isomorphic-fetch');

const rGetPhotos = () => {
	return fetch('https://jsonplaceholder.typicode.com/photos')
		.then((response) => response.json());
};

const rGetUsers = (id = '') => {
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then((response) => response.json());
};

const rAddUser = (data) => {
	return fetch('https://jsonplaceholder.typicode.com/users', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	})
		.then((response) => response.json());
};

const rSendEmail = (data) => {
	return fetch('https://mandrillapp.com/api/1.0/messages/send.json', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	})
		.then((response) => response.json());
};

export {
	rGetPhotos,
	rGetUsers,
	rAddUser,
	rSendEmail
};