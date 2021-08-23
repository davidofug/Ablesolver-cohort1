// setTimeout(() => {
//   // runs after 2 seconds
//     console.log('Ran after 2 seconds')
// }, 2000);

// setTimeout(() => {
//   // runs after 50 milliseconds
//     console.log('Ran after 50 milliseconds')
// }, 50);

//setTimeout with a params

let greeting = (name, msg) => console.log(`${msg} ${name}`)

setTimeout(greeting, 2000, 'David', 'Hola')
setTimeout(greeting, 500, 'Abudi', 'Agandi')