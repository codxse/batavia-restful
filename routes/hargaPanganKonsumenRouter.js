var express = require('express');
var router = express.Router();
var hargaPanganKonsumenCtrl = require('../controllers/hargaPanganKonsumenCtrl');
var path = ['/harga-pangan-tingkat-konsumen','/histogram'];

/* middleware for select by id */
router.use(path[0] + '/id=:_id', function(req, res, next) {
  return hargaPanganKonsumenCtrl.middleware(req, res, next);
});

/* crete data */
router.post(path[0], function(req, res) {
  return hargaPanganKonsumenCtrl.create(req, res);
});

/* select data */
router.get(path[0], function(req, res) {
  return hargaPanganKonsumenCtrl.select(req, res);
});

/* select data by id */
router.get(path[0] + '/id=:_id', function(req, res) {
  return hargaPanganKonsumenCtrl.selectById(req, res);
});

/* sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return hargaPanganKonsumenCtrl.sortByKey(req, res);
});

router.get(path[0] + '&:_key=:_value&sortBy=:_key2&order=:_arg', function(req, res) {
  return hargaPanganKonsumenCtrl.sortQueryByKey(req, res);
});

/* get max or min from selected key */
router.get(path[0] + '/key=:_key&get=:_arg', function(req, res) {
  return hargaPanganKonsumenCtrl.getMaxMin(req, res);
});

/* get date range between grather than (gd) and last than (ld) */
router.get(path[0] + '/key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return hargaPanganKonsumenCtrl.getDateBetween(req, res);
});

/* update all field from given data */
router.put(path[0] + '/id=:_id', function(req, res) {
  return hargaPanganKonsumenCtrl.updateAll(req, res);
});

/* update selected field */
router.patch(path[0] + '/id=:_id', function(req, res) {
  return hargaPanganKonsumenCtrl.update(req, res);
});

/* delete selected data by id */
router.delete(path[0] + '/id=:_id', function(req, res) {
  return hargaPanganKonsumenCtrl.delete(req, res);
});

/* HISTOGRAM ROUTERS */

/* middleware for select by id */
router.use(path[0] + path[1] + '/id=:_id', function(req, res, next) {
  return hargaPanganKonsumenCtrl.middlewareHist(req, res, next);
});

/* crete data */
router.post(path[0] + path[1], function(req, res) {
  return hargaPanganKonsumenCtrl.createHist(req, res);
});

/* select data */
router.get(path[0] + path[1], function(req, res) {
  return hargaPanganKonsumenCtrl.selectHist(req, res);
});

/* select data by id */
router.get(path[0] + path[1] + '/id=:_id', function(req, res) {
  return hargaPanganKonsumenCtrl.selectHistById(req, res);
});

/* sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + path[1] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return hargaPanganKonsumenCtrl.sorHistByKey(req, res);
});

/* get max or min from selected key */
router.get(path[0] + path[1] + '/key=:_key&get=:_arg', function(req, res) {
  return hargaPanganKonsumenCtrl.getHistMaxMin(req, res);
});

/* update all field from given data */
router.put(path[0] + path[1] + '/id=:_id', function(req, res) {
  return hargaPanganKonsumenCtrl.updateHistAll(req, res);
});

/* update selected field */
router.patch(path[0] + path[1] + '/id=:_id', function(req, res) {
  return hargaPanganKonsumenCtrl.updateHist(req, res);
});

/* delete selected data by id */
router.delete(path[0] + path[1] + '/id=:_id', function(req, res) {
  return hargaPanganKonsumenCtrl.deleteHist(req, res);
});

module.exports = router;
