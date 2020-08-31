const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Deplyment successful')
})

const port = process.env.port || 8080

app.listen(port, () => {
  console.log('hello deployed')
})
