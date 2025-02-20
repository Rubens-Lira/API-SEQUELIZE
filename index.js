const express = require('express')
const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/tasks', function (req, res) {
  res.send('Veja suas tasks')
})

app.listen(3000) 