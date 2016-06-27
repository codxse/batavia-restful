var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv');

// this is api pages
var port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// view
app.get('/', function(req, res) {
  res.redirect(301, '/v1');
});

app.get('/v1', function(req, res) {
  res.send('Batavia RESTful service');
});

app.listen(port, function() {
  console.log('Here we are @' + port);
});
