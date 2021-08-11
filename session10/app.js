//Start a node server that listens via the http protocol
const HTTP = require('http')

require('dotenv').config()

const HOSTNAME = '127.0.0.1' //or localhost
const PORT = process.env.PORT || 8888 // Use the port from the .env otherwise assign 8888

const SERVER = HTTP.createServer((request,response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/plain')
  //To set environment variables at the process you can follow this 
  //ENV_NAME=ENV_VALUE node filename at the CLI
  //or add them to the .env file.
  //Add the dotenv package to your node app. Following the steps below.
  //1. yarn add dotenv or npm install dotenv
  //2. require('dotenv').config() recommended be added at the top of the file
  //Tip: It's recommended to ignore the .env and node_modules using .gitignore feature. For example
  // echo .env > .gitignore
  // echo node_modules/ >> .gitignore
    
  let { APP_NAME } = process.env

    response.end(`${APP_NAME}\n${process.env.PUBLIC_KEY}`)
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
