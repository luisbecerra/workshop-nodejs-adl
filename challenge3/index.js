const fs = require('fs');

let myPromise = new Promise((resolve, reject) => {
	// TODO: Usar la funcion del ejercicio anterior
	fs.writeFile("./test.txt", 'Chapter Backend', function (err) {
		// la funcion es la que maneja lo que sucede despues de termine el evento
		if (err) {
				return console.log(err);
		}
		// las funciones de javascript en nodejs son asincronicas
		// por lo tanto lo que se quiera hacer debe hacerse dentro de la funcion que maneja el evento
		// si uno declara una variable arriba de la funcion, la manipula dentro y la quiere usar
		// despues afuera, se corre el riezgo de que nunca se realice la manipulacion.
		throw "The file was saved!";
});
}).then(message => {
	console.log('SUCCESS MSG', message);
}).catch(error => {
	console.log('FAILURE MSG', error);
})


// TODO: Imprimir un mensaje despues de escribir un archivo de manera asincrona
