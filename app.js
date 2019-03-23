const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require("./routes/routes.js")
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/anotherone', (req, res) => {
    res.send('Another One')
})

app.get('/users', (req, res) => res.send(Object.values(users)))

let users = [
  {
    "id": "id1",
    "username":"Someone"
  },
  {
    "id": "AnotherID",
    "username":"SomeoneElse"
  }
]

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
