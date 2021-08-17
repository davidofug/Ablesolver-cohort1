const inquirer = require('inquirer')
const districts = require('./uganda.districts')

//Describe or define the question(s) that the inquirer will use
//Each question is an object literal {} not object instance
const questions = [
    {
        type: 'list',
        name: 'response',
        message: 'Do you want to see the districts of Uganda?',
        choices: ['Yes', 'No']
    }
]
//Use the inquirer library to output a question to the cli and pick input
inquirer.prompt(questions).then(answer => {
    let { response } = answer
    if (response == 'Yes') {
        if (districts.length > 0)
            console.log(districts.join("\n"))
    }
    else
        console.log('Okay! Good bye')
})

