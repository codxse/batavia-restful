var express = require('express');
var Ikhtisar = require('../models/ikhtisarModel');

// middleware
exports.middleware = function(req, res, next) {
  Ikhtisar.findById(req.params._id, function(err, jsonData) {
    if (err) {
      res.status(500).send(err);
    } else if (jsonData) {
      req.jsonData = jsonData;
      next();
    } else {
      res.status(404).send('no id found');
    }
  });
};

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
  res.json(req.jsonData);
};

// mongodb query db.collection.findById(_id) .rom middleware
// asign new json data (req.body) to old data
// mongodb query db.collection.save()
exports.updateAll = function(req, res) {
    req.jsonData.tahun = req.body.tahun;
    req.jsonData.rincian = req.body.rincian;
    req.jsonData.jumlah = req.body.jumlah;
    req.jsonData.kategori = req.body.kategori;
    req.jsonData.persen = req.body.persen;
    req.jsonData.save(function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(req.jsonData);
      }
    });
};

// mongodb query db.collection.findById(_id) from middleware
// for every field that wanted to be updated
// asign new json data (req.body) to old data
// mongodb query db.collection.save()
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  for (var key in req.body) {
    req.jsonData[key] = req.body[key];
  }
  req.jsonData.save(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(req.jsonData);
    }
  });
};
