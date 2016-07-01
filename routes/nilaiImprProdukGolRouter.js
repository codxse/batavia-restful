var express = require('express');
var router = express.Router();
var nilaiImprProdukGolCtrl = require('../controllers/nilaiImprProdukGolCtrl');
var path = ['/nilai-impor-produk-menurut-golongan','/histogram'];

/* middleware for select by id */
router.use(path[0] + '/id=:_id', function(req, res, next) {
  return nilaiImprProdukGolCtrl.middleware(req, res, next);
});

/* crete data */
router.post(path[0], function(req, res) {
  return nilaiImprProdukGolCtrl.create(req, res);
});

/* select data */
router.get(path[0], function(req, res) {
  return nilaiImprProdukGolCtrl.select(req, res);
});

/* select data by id */
router.get(path[0] + '/id=:_id', function(req, res) {
  return nilaiImprProdukGolCtrl.selectById(req, res);
});

/* sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return nilaiImprProdukGolCtrl.sortByKey(req, res);
});

// router.get(path[0] + '&query=:_query&sortBy=:_key', function(req, res) {
//   return nilaiImprProdukGolCtrl.sortQueryByKey(req, res);
// });

/* get max or min from selected key */
router.get(path[0] + '/key=:_key&get=:_arg', function(req, res) {
  return nilaiImprProdukGolCtrl.getMaxMin(req, res);
});

/* get date range between grather than (gd) and last than (ld) */
router.get(path[0] + '/key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return nilaiImprProdukGolCtrl.getDateBetween(req, res);
});

/* update all field from given data */
router.put(path[0] + '/id=:_id', function(req, res) {
  return nilaiImprProdukGolCtrl.updateAll(req, res);
});

/* update selected field */
router.patch(path[0] + '/id=:_id', function(req, res) {
  return nilaiImprProdukGolCtrl.update(req, res);
});

/* delete selected data by id */
router.delete(path[0] + '/id=:_id', function(req, res) {
  return nilaiImprProdukGolCtrl.delete(req, res);
});

/* HISTOGRAM ROUTERS */

/* middleware for select by id */
router.use(path[0] + path[1] + '/id=:_id', function(req, res, next) {
  return nilaiImprProdukGolCtrl.middlewareHist(req, res, next);
});

/* crete data */
router.post(path[0] + path[1], function(req, res) {
  return nilaiImprProdukGolCtrl.createHist(req, res);
});

/* select data */
router.get(path[0] + path[1], function(req, res) {
  return nilaiImprProdukGolCtrl.selectHist(req, res);
});

/* select data by id */
router.get(path[0] + path[1] + '/id=:_id', function(req, res) {
  return nilaiImprProdukGolCtrl.selectHistById(req, res);
});

/* sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + path[1] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return nilaiImprProdukGolCtrl.sorHistByKey(req, res);
});

/* get max or min from selected key */
router.get(path[0] + path[1] + '/key=:_key&get=:_arg', function(req, res) {
  return nilaiImprProdukGolCtrl.getHistMaxMin(req, res);
});

/* update all field from given data */
router.put(path[0] + path[1] + '/id=:_id', function(req, res) {
  return nilaiImprProdukGolCtrl.updateHistAll(req, res);
});

/* update selected field */
router.patch(path[0] + path[1] + '/id=:_id', function(req, res) {
  return nilaiImprProdukGolCtrl.updateHist(req, res);
});

/* delete selected data by id */
router.delete(path[0] + path[1] + '/id=:_id', function(req, res) {
  return nilaiImprProdukGolCtrl.deleteHist(req, res);
});

module.exports = router;
