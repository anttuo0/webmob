const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const res = require('express/lib/response')

app.use(express.json())

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
    res.send('<h1>Memo</h1>')
  })

  app.get('/persons', (req, res) => {
    res.json(persons)
  })
  
  app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
    
    
  })

  app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)

    if(persons.some(person => id === person.id)){
      persons = persons.filter(person => person.id !== id)

      res.status(200).end()

    } else {
      res.status(404).end()
    }

    
  })

  app.post('/persons', (req,res) =>  {
    const person = req.body
    console.log(person)
    person.id = Math.floor(Math.random() * 10000)
    persons = persons.concat(person)

    res.json(person)
  })

const port = 3001 
app.listen(port)
console.log(`Server running on port ${port}`)





