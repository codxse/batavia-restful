var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv');

// this is api pages
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to database
const myEnv = dotenv.config();
var host = myEnv.DB_HOST,
  database = myEnv.DATABASE,
  user = myEnv.DB_USER,
  pass = myEnv.DB_PASS;
var db = mongoose.connect('mongodb://' + user + ':' + pass + '@' + host + '/' + database);

// use this for /v1/ikhtisar-statistiks Router
var Ikhtisar = require('./models/ikhtisar.server.model');

// /v1/ikhtisar-statistiks Router
var ikhtisarRouter = express.Router();
ikhtisarRouter.route('/ikhtisar-statistiks')
  .post(function(req, res) {
    var jsonData = new Ikhtisar(req.body);
    data.save();
    res.status(201).send(jsonData);
  })
  .get(function(req, res) {
    var query = req.query;
    Ikhtisar.find(query, function(err, jsonData) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(jsonData);
      }
    });
  });
ikhtisarRouter.route('/ikhtisar-statistiks/:_id')
  .get(function(req, res) {
    Ikhtisar.findById(req.params._id, function(err, jsonData) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(jsonData);
      }
    });
  });
app.use('/v1', ikhtisarRouter);

app.get('/', function(req, res) {
  res.send('Batavia RESTful service');
});

app.listen(port, function() {
  console.log('Here we are @' + port);
});
