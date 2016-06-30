var InflasiSchema = require('../models/inflasiModel');
var Model = InflasiSchema.linear;
var Data = InflasiSchema.data;

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
  var newModel = new Model(req.body);
  newModel.save(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(newModel);
    }
  });
};

exports.createData = function(req, res) {
  var newData = new Data(req.body);
  newData.save(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(newData);
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

exports.selectModelById = function(req, res) {
  Model.findById(req.params._id, function(err, resultJson) {
    if (err) {
      res.status(500).send(err);
    } else if (resultJson) {
      res.json(resultJson)
    } else {
      res.status(404).send('404: data not found')
    }
  });
}

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

// sort Json Data by Key argumen [asc, desc]
exports.sortDataByKey = function(req, res) {
  var query = Data.find();
  if (req.params._arg === 'desc') {
    query.sort({
      [req.params._key]: 'desc'
    }).exec(function(err, resultJsons) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(resultJsons);
      }
    });
  } else if (req.params._arg === 'asc') {
    query.sort({
      [req.params._key]: 'asc'
    }).exec(function(err, resultJsons) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(resultJsons);
      }
    });
  } else {
    res.status(404).send('Not Valid Input');
  }
};

// get max or min based on key
exports.getMaxMinData = function(req, res) {
  var query = Data.findOne();
  if (req.params._arg === 'max') {
    query.sort('-'+req.params._key)
      .exec(function(err, resultJson) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(resultJson);
        }
      });
    } else if (req.params._arg === 'min') {
      query.sort(req.params._key)
        .exec(function(err, resultJson) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(resultJson);
          }
        });
    } else {
      res.status(404).send('Not Valid Input, input in [min, max]');
    }
};

// get date from :_ld to :_gd
exports.getDataBetweenDate = function(req, res) {
  Data.find({
    [req.params._key]: {
      $gt: [req.params._gd],
      $lt: [req.params._ld]
    }
  }).sort({
    [req.params._key]: 'asc'
  }).exec(function(err, resultJsons) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(resultJsons);
    }
  });
};

// update All fields from data
exports.updateAllDataFields = function(req, res) {
    req.jsonData.tahun = req.body.tahun;
    req.jsonData.inflasi_jakarta = req.body.inflasi_jakarta;
    req.jsonData.inflasi_nasional = req.body.inflasi_nasional;
    req.jsonData.keterangan = req.body.keterangan;
    req.jsonData.save(function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(req.jsonData);
      }
    });
};

// update some fields from model
exports.updateModelFields = function(req, res) {
  Model.findById(req.params._id, function(err, resultJson) {
    if (err) {
      res.status(500).send(err);
    } else if (resultJson) {
      req.resultJson = resultJson;

      if (req.body.model != null) {
        if (req.body.model.coefficient) {
          req.resultJson.model.coefficient = req.body.model.coefficient;
        }

        if (req.body.model.slope) {
          req.resultJson.model.slope = req.body.model.slope;
        }

        if (req.body.model.correlation_coefficient) {
          req.resultJson.model.correlation_coefficient = req.body.model.correlation_coefficient;
        }
      }

      if (req.body.data) {
        var isInArray = function(value, array) {
          return array.indexOf(value) > -1;
        };

        var isExist = function(uniqueId) {
          return Data.count({_id: uniqueId}, function(err, count) {
            if (err) {
              console.log(err);
              return false;
            } else {
              if (count > 0) {
                return true;
              } else {
                return false;
              }
            }
          });
        };

        // if data in ArrBody doesnt exist arrData
        //  and if data in ArrBody exist in collection Data
        //    add data in ArrBody to arrData
        // save!

        var arrData = req.resultJson.data;
        var arrBody = req.body.data;
        /* BIG NOTE */
        /* looping below doesnt work async
        /* please make a change for saving async
        /* if possibe dont use looping
        /* by: Nadiar AS codxse@github
        /* END NOTE */

        for (index in arrBody) {
          if (!isInArray(arrBody[index], arrData)) {
            if (isExist(arrBody[index])) {
              arrData.push(arrBody[index]);
            }
          }
        }
      }

      req.resultJson.save(function(err) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(req.resultJson);
        }
      });

    // If model id not found
    } else {
      res.status(404).send('404: data not found');
    }
  });
};

exports.updateDataFields = function(req, res) {
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

exports.deleteModel = function(req, res) {
  Model.findById(req.params._id, function(err, resultJson) {
    req.resultJson = resultJson;
    if (err) {
      res.status(500).send(err);
    } else if (resultJson) {
      req.resultJson.remove(function(err) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(204).send('Model removed');
        }
      })
    } else {
      res.status(404).send('404: data not found');
    }
  });
};

exports.deleteData = function(req, res) {
  req.jsonData.remove(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      // pop data on model data array
      // BIG NOTE
      // Below are not async
      // please make it async if possible
      // Nadiar AS codxse@github
      Model.findOne(function(err, resultJson) {
        if (err) {
          res.status(500).send(err);
        }
        if (resultJson) {
          var arrData = resultJson.data;
          var index = arrData.indexOf(req.params._id);
          if (index > -1) {
            arrData.splice(index, 1);
          }
          resultJson.save(function(err) {
            if (err) {
              res.status(500).send(err);
            }
          });
        }
      }).exec();
      res.status(204).send('Data removed');
    }
  });
};
