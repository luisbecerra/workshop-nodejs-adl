
function myPromise() {
	let myPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			// Resolvemos la promesa, si queremos rechazarla usamos la funcion reject
			resolve('It´s ADL workshop time')
		}, 1000);
	});

	return myPromise;
}


function printAferSecond(){

	// Manage error with try/catch
	let result1 = myPromise();
	console.log(result1);
	let result2 = myPromise();
	console.log(result2);
}

printAferSecond()



// TODO: Imprimir un mensaje despues de escribir un archivo de manera asincrona
