var express = require('express');

var router = express.Router();
var umpInflasiCtrl = require('../controllers/umpInflasiCtrl');
var path = '/ump-inflasi/data';

/* middleware for select ump and inflasi data by id */
router.use(path + '/id=:_id', function(req, res, next) {
  return umpInflasiCtrl.middlewareData(req, res, next);
});

/* create linear data */
router.post('/ump-inflasi', function(req, res) {
  return umpInflasiCtrl.createModel(req, res);
});

/* create ump and inflasi data */
router.post(path, function(req, res) {
  return umpInflasiCtrl.createData(req, res);
});

/* select linear model */
router.get('/ump-inflasi', function(req, res) {
  return umpInflasiCtrl.selectModel(req, res);
});

/* select linear model by id*/
router.get('/ump-inflasi/id=:_id', function(req, res) {
  return umpInflasiCtrl.selectModelById(req, res);
});

/* select ump and inflasi data */
router.get(path, function(req, res) {
  return umpInflasiCtrl.selectData(req, res);
});

/* select ump and inflasi data by id */
router.get(path + '/id=:_id', function(req, res) {
  return umpInflasiCtrl.selectDataById(req, res);
});

/* sort ump and inflasi data by key */
router.get(path + '&sortBy=:_key&order=:_arg', function(req, res) {
  return umpInflasiCtrl.sortDataByKey(req, res);
});

/* select max min based on key */
router.get(path + '&key=:_key&get=:_arg', function(req, res) {
  return umpInflasiCtrl.getMaxMinData(req, res);
});

/* get data between date */
router.get(path + '&key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return umpInflasiCtrl.getDataBetweenDate(req, res);
});

/* update all field for choosen data */
router.put(path + '/id=:_id', function(req, res) {
  return umpInflasiCtrl.updateAllDataFields(req, res);
});

/* update all field for choosen data */
router.patch('/ump-inflasi/id=:_id', function(req, res) {
  return umpInflasiCtrl.updateModelFields(req, res);
});

module.exports = router;
