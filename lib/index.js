
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/a', function (req, res) {
  res.send('aaaaaaa');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});