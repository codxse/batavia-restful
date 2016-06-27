var express = require('express'),
  Ikhtisar = require('../models/ikhtisarModel'),
  bodyParser = require('body-parser');
  
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mongodb query db.collection.save()
exports.create = function(req, res) {
  var newJsonData = new Ikhtisar(req.body);
  newJsonData.save();
  res.status(201).send(newJsonData);
};

// mongodb query db.collection.find()
exports.select = function(req, res) {
  var query = req.query;
  Ikhtisar.find(query, function(err, jsonData) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(jsonData);
    }
  });
};

// mongodb query db.collection.findById(_id)
exports.selectById = function(req, res) {
  Ikhtisar.findById(req.params._id, function(err, jsonData) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(jsonData);
    }
  });
};
