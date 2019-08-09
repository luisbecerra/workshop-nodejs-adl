// importamos la libreria
const fs = require('fs');
//puede llevar cualquier nombre, generalmente
// se sigue la convencion de usar el mismo nombre que la libreria
// fs es parte de la libreria standard


// TODO: asignar a esta variable el resultado del ejercicio anterior

/**
 * @param {string} directorio de destino
 * @param {string} texto a escribir dentro del archivo
 * @param {function} manejador de funcion 
 */


fs.writeFile("./test.txt", fullName, function (err) {
    // la funcion es la que maneja lo que sucede despues de termine el evento
    if (err) {
        return console.log(err);
    }
    // las funciones de javascript en nodejs son asincronicas
    // por lo tanto lo que se quiera hacer debe hacerse dentro de la funcion que maneja el evento
    // si uno declara una variable arriba de la funcion, la manipula dentro y la quiere usar
    // despues afuera, se corre el riezgo de que nunca se realice la manipulacion.
    console.log("The file was saved!");
});


/*

// FORMA SINCRONA
try {
	fs.writeFileSync('./test.txt', fullName);
	console.log("The file was saved!");
} catch(err) {
  // An error occurred
  console.error(err);
}
*/


console.log('Finish code');

