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
// const id = setInterval(() => {
//   console.log('The set Interval message')
// }, 1000)

// setTimeout(() => {
//     clearInterval(id)
// }, 4000)
// let count = 0
// const interval = setInterval(() => {
//     count++
//     console.log(count)

//     if (count === 10) {
//         clearInterval(interval);
//         // return;
//     }
//   // otherwise do things
// }, 1000);

/* let payroll = [
    {
        "salary": "UGX 15M",
        "paydate": "25th",
        "status": false,
        "name": "David",
    },
    {
        "name": "Jonathan",
        "salary": "UGX 13M",
        "paydate": "30th",
        "status": true
    },
    {
        "name": "Joanita",
        "salary": "UGX 16M",
        "paydate": "21st",
        "status": false
    }
]

let index = 0
const PAYROLL_INTERVAL_ID = setInterval(() => {

    if (payroll[index].status == false) {
        
        console.log(`Name: ${payroll[index]['name']} Salary: ${payroll[index].salary} Payment on: ${payroll[index]['paydate']}`)
        payroll[index]['status'] = true
    }

    index++;

    if (index === payroll.length) {
        clearInterval(PAYROLL_INTERVAL_ID)
        console.log(payroll)
    }

}, 1000) */

// Recursive setTimeout

let times = 0
const printMyName = () => {
    console.log(`Printed: ${times}`)
    times += 4
    const id = setTimeout(printMyName, 1000)
    if (times === 36)
        clearInterval(id)
}

setTimeout(printMyName, 1000)
