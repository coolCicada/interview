const express = require('./express')
const app = express()

app.get('/name', function (req, res) {
  res.end('zfpx')
})

app.get('/age', function (req, res) {
  res.end('9')
})

app.post('/name', function (req, res) {
  res.end('post name')
})

app.listen(3000, function () {
  console.log('server start 3000')
})
