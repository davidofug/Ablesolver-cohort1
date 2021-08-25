/**
 * Promises are alternatives to callback
 * Because callbacks can make code look complicated hence had to maintain
 * They 2 parts to them.
 * 1. Definition of the promise 
 * 2. Usage of the promise/consuming
**/

/* const DONE = false
// Definition of the the promise
const IS_IT_DONE = new Promise((resolve, reject) => {
    const SUCCESS = 'Promise resolved'
    if (DONE) {
        resolve(SUCCESS) //Was passed as an argument to the constructor
    }
    else
    {
      const FAILURE = "Promise failed";
      reject(FAILURE); //Was passed as an argument to the constructor
    }
}) */

//Usage
/* const CHECK_IF_DONE = () => {
    IS_IT_DONE
    .then(result => console.log(result))
    .catch( error => console.log(error) )
}
//Invoke the checker.
CHECK_IF_DONE() */

//Import the file system module 'fs' and assign it to a variable
const FS = require('fs')

const READ_FILE = (fileName) => {
    //Create and return a promise 
    return new Promise((resolve, reject) => {
        //use the readFile(filename, encoding, callback) method of the fs module
        FS.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                reject(err) //Reject the promise 
                return //And stop code execution
            }
            resolve(data) //Resolve with data
        })
    })
}

//Use the promise above.
READ_FILE('./readme.md')
    .then(data => console.log(data))
    .catch(error => console.log(error))
