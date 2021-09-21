/**
 * Streams are an effecient way of handling files, network communication and information exchange.
 * Compared to traditional file reading methods which store the entire file in memory before processing, streams read small chunks inorder to process files piece by piece. This makes it quite effecient.
 */

// Example of traditional file reading

const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response){
    fs.readFile(`${__dirname}/negative-words.txt`, function(error, data){
        if(error) {
            return console.error(error) 
        }

        response.end(data)
    })
})

server.listen(5890,()=>console.log('Server listening on port 5890'))

//Using the code above is the file is big, you will notice performance constraints.
//It's better implement a stream like the code below.

const streamServer = http.createServer((req, res) => {
    try{
        const stream = fs.createReadStream(`${__dirname}/negative-words.txt`)
        stream.pipe(res)
    } catch {
        res.end('An error occured!')
        console.error('An error occured')
    }
})

streamServer.listen(5891, () => console.log('Streaming server listening on port 5891'))