var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('狗右中慧sb')
})
 
app.listen(3000)
