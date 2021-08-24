// Zero delay
// setTimeout(() => {
//     console.log('after')
// }, 0)

// console.log('before')

// setTimeout(() => {
//     console.log('The first')
// }, 0)

// setTimeout(() => {
//     console.log('The second')
// }, 0);

//setInterval: Running a callback forever on specific intervals

// setInterval(() => {
//     let date = new Date()
//     console.log(date.toLocaleTimeString())
// }, 1000);

//To stop the setInterval we utilize the clearInterval by passing the ID of the setInterval()
const id = setInterval(() => {
  console.log('The set Interval message')
}, 2000);

clearInterval(id);
