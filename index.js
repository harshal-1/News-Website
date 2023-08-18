const express = require('express')
const path = require('path')
// const axios = require('axios')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname) })
})

// app.get('/api', (req, res) => {
//   let r= await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=c320592b65bc4e339d97f373eb1b7972')
//   res.json(r)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})