var appRouter = function (app) {
  // app.get("/", function(req, res) {
  //   res.status(200).send("Welcome to our restful API")
  // })

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
}

module.exports = appRouter
