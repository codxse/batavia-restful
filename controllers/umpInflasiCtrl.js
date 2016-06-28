var express = require('express');
var UmpInflasi = require('../models/umpInflasiModel');
var Linear = UmpInflasi.linear;
var DataUmpInflasi = UmpInflasi.data;

exports.createLinearData = function(req, res) {
  var newLinearJsonData = new Linear(req.body);
  newLinearJsonData.save(function(err) {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.status(201).send(newLinearJsonData);
    }
  });
};

exports.createUmpInflasiData = function(req, res) {
  var newUmpInflasiJsonData = new DataUmpInflasi(req.body);
  newUmpInflasiJsonData.save(function(err) {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.status(201).send(newUmpInflasiJsonData);
    }
  });
};

exports.selectLinearData = function(req, res) {
  Linear.find({})
    .populate('data')
    .exec(function(err, resultJson) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(resultJson);
      }
  });
};

exports.selectUmpInflasiData = function(req, res) {
  var query = req.query;
  DataUmpInflasi.find(query, function(err, resultJsons) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(resultJsons);
    }
  });
};
