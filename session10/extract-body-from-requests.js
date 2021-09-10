const express = require('express')
const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.post('https://jsonplaceholder.typicode.com/todos', (request, response) => {
  console.log(request.body.todo)
})