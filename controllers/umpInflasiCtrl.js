var express = require('express');
var UmpInflasi = require('../models/umpInflasiModel');
var Model = UmpInflasi.linear;
var Data = UmpInflasi.data;

// middleware
exports.middlewareData = function(req, res, next) {
  Data.findById(req.params._id, function(err, jsonData) {
    if (err) {
      res.status(500).send(err);
    } else if (jsonData) {
      req.jsonData = jsonData;
      next();
    } else {
      res.status(404).send('404: data not found');
    }
  });
};

exports.createModel = function(req, res) {
  var model = new Linear(req.body);
  model.save(function(err) {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.status(201).send(newLinearJsonData);
    }
  });
};

exports.createData = function(req, res) {
  var data = new Data(req.body);
  data.save(function(err) {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.status(201).send(newUmpInflasiJsonData);
    }
  });
};

exports.selectModel = function(req, res) {
  Model.find({})
    .populate('data')
    .exec(function(err, resultJson) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(resultJson);
      }
  });
};

exports.selectData = function(req, res) {
  var query = req.query;
  Data.find(query, function(err, resultJsons) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(resultJsons);
    }
  });
};

exports.selectDataById = function(req, res) {
  res.json(req.jsonData);
};
