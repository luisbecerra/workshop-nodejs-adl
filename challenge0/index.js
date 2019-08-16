const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

myArray.forEach(item => { 
	console.log(item) 
})

const json = {
  'foo': 'bar',
  'baz': 'qux'
};


// TODO: Imprimir los atributos del objeto

Object.keys(json).forEach(item => console.log(item));


