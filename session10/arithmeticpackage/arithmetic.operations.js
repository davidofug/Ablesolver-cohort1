exports.customMath = {
    name: 'custom Math',
    sum: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    // product: (numbers = []) => {
    //     return numbers.reduce((accumulator, currentValue) => accumulator * currentValue )
    // }
    product: (numbers = []) =>
        numbers.reduce((accumulator, currentValue) =>
            accumulator * currentValue)

}