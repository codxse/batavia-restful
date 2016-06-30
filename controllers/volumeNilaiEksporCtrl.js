var VolumeNilaiEksporSchema = require('../models/VolumeNilaiEksporModel');
var Data = VolumeNilaiEksporSchema.data;

// middleware
exports.middleware = function(req, res, next) {
  Data.findById(req.params._id, function(err, resultJson) {
    if (err) {
      res.status(500).send(err);
    } else if (resultJson) {
      req.jsonData = resultJson;
      next();
    } else {
      res.status(404).send('404: data not found');
    }
  });
};

// mongodb query db.collection.save()
exports.create = function(req, res) {
  var newData = new Data(req.body);
  newData.save(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(newData);
    }
  });
};

// mongodb query db.collection.find()
exports.select = function(req, res) {
  Data.find(req.query, function(err, resultJsons) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(resultJsons);
    }
  });
};

// mongodb query db.collection.findById(_id)
exports.selectById = function(req, res) {
  res.json(req.jsonData);
};

// sort Json Data by Key argumen [asc, desc]
exports.sorByKey = function(req, res) {
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
exports.getMaxMin = function(req, res) {
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
exports.getDateBetween = function(req, res) {
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

// mongodb query db.collection.findById(_id) .rom middleware
// asign new json data (req.body) to old data
// mongodb query db.collection.save()
exports.updateAll = function(req, res) {
    req.jsonData.tahun = req.body.tahun;
    req.jsonData.no_hs = req.body.no_hs;
    req.jsonData.komoditas = req.body.komoditas;
    req.jsonData.volume = req.body.volume;
    req.jsonData.nilai = req.body.nilai;
    req.jsonData.grup = req.body.grup;
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

exports.delete = function(req, res) {
  req.jsonData.remove(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send('Data removed');
    }
  })
};
