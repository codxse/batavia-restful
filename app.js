var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Batavia RESTful service');
});

app.listen(port, function() {
  console.log('Here we are @' + port);
});
