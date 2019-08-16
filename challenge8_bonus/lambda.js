const https = require('https')
let url = "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"

exports.handler = async function(event) {

  const promise = new Promise(function(resolve, reject) {
			https.get(url, (res) => {
				resolve(`La url de amazon ha respondido con status ${res.statusCode}`)
			}).on('error', (e) => {
				reject(Error(e))
			})
	})
		
  return promise
}