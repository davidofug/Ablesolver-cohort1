//Async/await
//1. Simplest example
const BETTER_PROMISE = async function () {
    return `Indeed awesome!`
}

// const BETTER_PROMISE_CONSUMER = BETTER_PROMISE()
// console.log(BETTER_PROMISE_CONSUMER) will output => Promise { 'Indeed awesome!' }

// To out put the actual string
BETTER_PROMISE().then(result => console.log(result))
//2. Chaining Promises in Async/await
