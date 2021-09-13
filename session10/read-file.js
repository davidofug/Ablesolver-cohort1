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
/**
 * Test asynchronous
 * The line of code below will be output first because asynchronous doesn't block the thread.
 * Yet the code from :9 to :15 is asynchronous and will take more time to execute than the line below.
 */

console.log('After file reading')