let sum = (num1, num2) => {
    // if (typeof a == 'undefined') return false
    // if (typeof b == 'undefined') return false
    if (typeof num1 != 'number' || typeof num2 != 'number') return false
    
    return num1 + num2
}

// console.log(sum(5, 9))
// console.log(sum(o,9)) //This can be very hard to troubleshoot because the system compiler won't return a clear error message
// console.log(sum(10,'90'))

module.exports = sum