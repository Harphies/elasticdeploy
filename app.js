const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Alhamdulilah')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('hello deployed')
})
