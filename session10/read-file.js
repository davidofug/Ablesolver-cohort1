//Read using asynchronous fs.readFile
const fs = require('fs')
const path = require('path')

const user = 'davidofug'
const PATH = path.join('/','Users', user, 'Workspace/Ablesolver-cohort1/session10','server.js') //Users/davidofug/Workspace/Ablesover-cohort1/session10/logs.txt
//C:\Users\username\Workspace\Ablesolver-cohort1\session10\logs.txt

fs.readFile(PATH, 'utf-8', (err, data) => {
    if(err){
        console.error(err)
        return
    }
    console.log(data)
})

console.log('After file reading')