/**
 * Example of destructuring
 */
const person = {
    'firstname': 'David',
    'lastname': 'Wampamba',
    'middlename': 'Melbourn',
    'town': 'Kansanga'
}
//Destructured variables
const { firstname, lastname } = person

console.log(firstname)

//None destructured variables
console.log(person["firstname"])
console.log(person.firstname)