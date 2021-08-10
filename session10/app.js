//Start a node server that listens via the http protocol
const HTTP = require('http')

require('dotenv').config()

const HOSTNAME = '127.0.0.1' //localhost
const PORT = process.env.PORT || 8888 // Use the port from the .env otherwise assign 8888

const SERVER = HTTP.createServer((request,response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    let { SALT } = process.env
    
    response.end(process.env.PUBLIC_KEY)
})

SERVER.listen(PORT, HOSTNAME,() => {
    console.log(`The server is running at ${HOSTNAME}:${PORT}`)
})

//How to terminate the node process without using the unsafe CTRL + C (Windows) or Control + C (Mac)
//Signal Terminate

process.on('SIGTERM', () => {
  SERVER.close(() => {
    console.log(`${process.pid} Process terminated`);
  });
});

//The process will be terminated after 5 minutes
setTimeout(()=> process.kill(process.pid, "SIGTERM"), 36000000);
