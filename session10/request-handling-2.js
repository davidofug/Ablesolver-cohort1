/* const https = require('https')

const data = new TextEncoder().encode(
  JSON.stringify({
    todo: 'Buy the milk 🍼'
  })
)

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const request = https.request(options, response => {
  console.log(`statusCode: ${response.statusCode}`)

  response.on('data', returnedData => {
    process.stdout.write(returnedData)
  })

})

request.on('error', error => console.error(error))

request.write(data)
request.end()
*/
//Using a third party Library (axios) to perform HTTP requests

const axios = require('axios')

axios
  .post('https://jsonplaceholder.typicode.com/todos', {
    todo: 'Buy the milk'
  })
  .then(response => {
    console.log(`statusCode: ${response.status}`)
    console.log(response)
  })
  .catch(error => console.error(error))