// importamos la libreria
const fs = require('fs');
//puede llevar cualquier nombre, generalmente
// se sigue la convencion de usar el mismo nombre que la libreria
// fs es parte de la libreria standard

class Person {
	constructor(){
		this.name = '';
		this.last_name = '';
	}
}

class LuisFelipe extends Person {
	constructor(name, last_name){
		super();
		this.name = name;
		this.last_name = last_name;
	}

	get fullName(){
		return `${this.name} ${this.last_name}`;	
	}
}

let person = new Person();

let myclass = new LuisFelipe('luis felipe', 'Becerra')


// TODO: asignar a esta variable el resultado del ejercicio anterior

/**
 * @param {string} directorio de destino
 * @param {string} texto a escribir dentro del archivo
 * @param {function} manejador de funcion 
 */



// FORMA SINCRONA
try {
	fs.writeFileSync('./test.txt', myclass.fullName);
	console.log("The file was saved!");
} catch(err) {
  // An error occurred
  console.error(err);
}


console.log('Finish code');

