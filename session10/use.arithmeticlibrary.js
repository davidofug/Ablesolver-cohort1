const customMath = require('./arithmeticpackage/operations').customMath

//Add numbers 2 + 5
console.log(customMath.sum(2, 5))

//Subtract 5 - 2
console.log(customMath.subtract(5, 2))

//Subtract 2 - 5
console.log(customMath.subtract(2, 5));

//Product of [2,2,2]
console.log(customMath.product([2, 2, 2]))

console.log(customMath.division(4,2))

const sm = require("./arithmeticpackage/operations").something;
console.log(sm.title)