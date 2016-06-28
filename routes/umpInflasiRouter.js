var express = require('express');

var router = express.Router();
var umpInflasiCtrl = require('../controllers/umpInflasiCtrl');

/* middleware for select ump and inflasi data by id */
router.use('/ump-inflasi/data/id=:_id', function(req, res, next) {
  return umpInflasiCtrl.middlewareData(req, res, next);
});

/* create linear data */
router.post('/ump-inflasi', function(req, res) {
  return umpInflasiCtrl.createModel(req, res);
});

/* create ump and inflasi data */
router.post('/ump-inflasi/data', function(req, res) {
  return umpInflasiCtrl.createData(req, res);
});

/* select linear data */
router.get('/ump-inflasi', function(req, res) {
  return umpInflasiCtrl.selectModel(req, res);
});

/* select ump and inflasi data */
router.get('/ump-inflasi/data', function(req, res) {
  return umpInflasiCtrl.selectData(req, res);
});

/* select ump and inflasi data by id */
router.get('/ump-inflasi/data/id=:_id', function(req, res) {
  return umpInflasiCtrl.selectDataById(req, res);
});

/* sort ump and inflasi data by key */
router.get('/ump-inflasi/data&sortBy=:_key&order=:_arg', function(req, res) {
  return umpInflasiCtrl.sortDataByKey(req, res);
});

module.exports = router;
