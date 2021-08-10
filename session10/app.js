const HTTP = require('http')
const HOSTNAME = '127.0.0.1' //localhost
const PORT = process.env.PORT || 8888

const SERVER = HTTP.createServer((request,response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello World!\n')
})

SERVER.listen(PORT, HOSTNAME,() => {
    console.log(`The server is running at ${HOSTNAME}:${PORT}`)
})