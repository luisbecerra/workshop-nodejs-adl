const http = require('http')

http.createServer(async (request, response) => {
	// TODO: Crear una ruta y el metodo http sobre la cual se ejecutara la lambda, pista: la puede obtenner del request
	// TODO: LLamar una lambda desde este metodo, recuerda el async/await
	const lambda_resp = 

	response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(lambda_resp);
  response.end();
}).listen(4001, 'localhost', () => {
  console.log(`Servidor corriendo en http://localhost:4001`);
});