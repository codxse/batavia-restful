var express = require('express');
var router = express.Router();
var perkemHargaGrosirCtrl = require('../controllers/perkemHargaGrosirCtrl');
var path = ['/perkembangan-harga-grosir','/histogram'];

/* middleware for select by id */
router.use(path[0] + '/id=:_id', function(req, res, next) {
  return perkemHargaGrosirCtrl.middleware(req, res, next);
});

/* crete data */
router.post(path[0], function(req, res) {
  return perkemHargaGrosirCtrl.create(req, res);
});

/* select data */
router.get(path[0], function(req, res) {
  return perkemHargaGrosirCtrl.select(req, res);
});

/* select data by id */
router.get(path[0] + '/id=:_id', function(req, res) {
  return perkemHargaGrosirCtrl.selectById(req, res);
});

/* sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return perkemHargaGrosirCtrl.sortByKey(req, res);
});

// router.get(path[0] + '&query=:_query&sortBy=:_key', function(req, res) {
//   return perkemHargaGrosirCtrl.sortQueryByKey(req, res);
// });

/* get max or min from selected key */
router.get(path[0] + '/key=:_key&get=:_arg', function(req, res) {
  return perkemHargaGrosirCtrl.getMaxMin(req, res);
});

/* get date range between grather than (gd) and last than (ld) */
router.get(path[0] + '/key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return perkemHargaGrosirCtrl.getDateBetween(req, res);
});

/* update all field from given data */
router.put(path[0] + '/id=:_id', function(req, res) {
  return perkemHargaGrosirCtrl.updateAll(req, res);
});

/* update selected field */
router.patch(path[0] + '/id=:_id', function(req, res) {
  return perkemHargaGrosirCtrl.update(req, res);
});

/* delete selected data by id */
router.delete(path[0] + '/id=:_id', function(req, res) {
  return perkemHargaGrosirCtrl.delete(req, res);
});

/* HISTOGRAM ROUTERS */

/* middleware for select by id */
router.use(path[0] + path[1] + '/id=:_id', function(req, res, next) {
  return perkemHargaGrosirCtrl.middlewareHist(req, res, next);
});

/* crete data */
router.post(path[0] + path[1], function(req, res) {
  return perkemHargaGrosirCtrl.createHist(req, res);
});

/* select data */
router.get(path[0] + path[1], function(req, res) {
  return perkemHargaGrosirCtrl.selectHist(req, res);
});

/* select data by id */
router.get(path[0] + path[1] + '/id=:_id', function(req, res) {
  return perkemHargaGrosirCtrl.selectHistById(req, res);
});

/* sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + path[1] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return perkemHargaGrosirCtrl.sorHistByKey(req, res);
});

/* get max or min from selected key */
router.get(path[0] + path[1] + '/key=:_key&get=:_arg', function(req, res) {
  return perkemHargaGrosirCtrl.getHistMaxMin(req, res);
});

/* update all field from given data */
router.put(path[0] + path[1] + '/id=:_id', function(req, res) {
  return perkemHargaGrosirCtrl.updateHistAll(req, res);
});

/* update selected field */
router.patch(path[0] + path[1] + '/id=:_id', function(req, res) {
  return perkemHargaGrosirCtrl.updateHist(req, res);
});

/* delete selected data by id */
router.delete(path[0] + path[1] + '/id=:_id', function(req, res) {
  return perkemHargaGrosirCtrl.deleteHist(req, res);
});

module.exports = router;
