var express = require('express');
var router = express.Router();
var komponenInflasiCtrl = require('../controllers/komponenInflasiCtrl');
var path = ['/komponen-inflasi'];

/* middleware for select by id */
router.use(path[0] + '/id=:_id', function(req, res, next) {
  return komponenInflasiCtrl.middleware(req, res, next);
});

/* crete data */
router.post(path[0], function(req, res) {
  return komponenInflasiCtrl.create(req, res);
});

/* select data */
router.get(path[0], function(req, res) {
  return komponenInflasiCtrl.select(req, res);
});

/* select data by id */
router.get(path[0] + '/id=:_id', function(req, res) {
  return komponenInflasiCtrl.selectById(req, res);
});

/* sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return komponenInflasiCtrl.sorByKey(req, res);
});

/* get max or min from selected key */
router.get(path[0] + '/key=:_key&get=:_arg', function(req, res) {
  return komponenInflasiCtrl.getMaxMin(req, res);
});

/* get date range between grather than (gd) and last than (ld) */
router.get(path[0] + '/key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return komponenInflasiCtrl.getDateBetween(req, res);
});

/* update all field from given data */
router.put(path[0] + '/id=:_id', function(req, res) {
  return komponenInflasiCtrl.updateAll(req, res);
});

/* update selected field */
router.patch(path[0] + '/id=:_id', function(req, res) {
  return komponenInflasiCtrl.update(req, res);
});

/* delete selected data by id */
router.delete(path[0] + '/id=:_id', function(req, res) {
  return komponenInflasiCtrl.delete(req, res);
});

module.exports = router;