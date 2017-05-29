var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('')
})
 
app.get('/hello', function (req, res) {
  res.send('helloworld')
})
 
app.listen(3000)
