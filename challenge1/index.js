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

console.log('Persona', myclass.fullName);


// TODO: Imprime tu nombre completo usando la clase que hereda de persona