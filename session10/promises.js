/**
 * Promises are alternatives to callback
 * Because callbacks can make code look complicated hence had to maintain
 * They 2 parts to them.
 * 1. Definition of the promise 
 * 2. Usage of the promise/consuming
**/

const DONE = false
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
})

//Usage

const CHECK_IF_DONE = () => {
    IS_IT_DONE
    .then(result => console.log(result))
    .catch( error => console.log(error) )
}

CHECK_IF_DONE()