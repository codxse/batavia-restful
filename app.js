var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv');

// this is api pages
var app = express();
var port = process.env.PORT || 3000;

// connect to database
const myEnv = dotenv.config();
var host = myEnv.DB_HOST,
  database = myEnv.DATABASE,
  user = myEnv.DB_USER,
  pass = myEnv.DB_PASS;
var db = mongoose.connect('mongodb://' + user + ':' + pass + '@' + host + '/' + database);

// router
var ikhtisarRouter = require('./routes/ikhtisarRouter');
app.use('/v1', ikhtisarRouter);

app.get('/', function(req, res) {
  res.send('Batavia RESTful service');
});

app.listen(port, function() {
  console.log('Here we are @' + port);
});
