const express = require('express')
const app = express()

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Martti Tienari",
      "number": "040-123456",
      "id": 2
    },
    {
      "name": "Arto Järvinen",
      "number": "040-123456",
      "id": 3
    },
    {
      "name": "Lea Kutvonen",
      "number": "040-123456",
      "id": 4
    }
  ]

  app.get('/', (req, res) => {
    res.send('<h1>Muistio</h1>')
  })
  
  app.get('/persons', (req, res) => {
    res.json(persons)
  })

const port = 3001 
app.listen(port)
console.log(`Server running on port ${port}`)





