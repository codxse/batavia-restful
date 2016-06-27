var express = require('express');
var Ikhtisar = require('../models/ikhtisarModel');

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

// mongodb query db.collection.findById(_id)
// asign new json data (body) to old data
// mongodb query db.collection.save()
exports.updateAll = function(req, res) {
  Ikhtisar.findById(req.params._id, function(err, updatedJsonData) {
      if (err) {
        res.status(500).send(err);
      } else {
        updatedJsonData.tahun = req.body.tahun;
        updatedJsonData.rincian = req.body.rincian;
        updatedJsonData.jumlah = req.body.jumlah;
        updatedJsonData.kategori = req.body.kategori;
        updatedJsonData.persen = req.body.persen;
        updatedJsonData.save();
        res.json(updatedJsonData);
      }
  });
};

// mongodb query db.collection.findById(_id)
// asign new json data (body) to old data
// mongodb query db.collection.save()
exports.update = function(req, res) {
  Ikhtisar.findById(req.params._id, function(err, updatedJsonData) {
      if (err) {
        res.status(500).send(err);
      } else {
        updatedJsonData.tahun = req.body.tahun;
        updatedJsonData.rincian = req.body.rincian;
        updatedJsonData.jumlah = req.body.jumlah;
        updatedJsonData.kategori = req.body.kategori;
        updatedJsonData.persen = req.body.persen;
        updatedJsonData.save();
        res.json(updatedJsonData);
      }
  });
};
