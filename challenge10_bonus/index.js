const Axios = require('axios-observable').Axios;
const { zip } = require('rxjs');

Axios.get('http://jsonplaceholder.typicode.com/posts/1')
	.subscribe(
		response => console.log(response.data),
		error => console.log(error)
	);

Axios.get('http://jsonplaceholder.typicode.com/posts/1/comments')
	.subscribe(
		response => console.log(response.data),
		error => console.log(error)
	);

// Pista: quita el susbscribe si quieres usar la funcion zip
	
zip(.....)
.subscribe(
	response => console.log(response.data),
	error => console.log(error)
);


	