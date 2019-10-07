const express = require('express')
const app = express()
const port = 16329

app.get('/', (req, res) =>
  res.send('Greetings from Palatipwong...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
