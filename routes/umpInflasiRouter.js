var express = require('express');

var router = express.Router();
var umpInflasiCtrl = require('../controllers/umpInflasiCtrl');

// router.use('/ump-inflasi', function(req, res, next) {
//   console.log(UmpInflasi);
//   console.log('----------------');
//   console.log(DataUmpInflasi);
// });

router.post('/ump-inflasi', function(req, res) {
  return umpInflasiCtrl.createLinearData(req, res);
});

router.post('/ump-inflasi/data', function(req, res) {
  return umpInflasiCtrl.createUmpInflasiData(req, res);
});

router.get('/ump-inflasi', function(req, res) {
  return umpInflasiCtrl.selectLinearData(req, res);
});

router.get('/ump-inflasi/data', function(req, res) {
  return umpInflasiCtrl.selectUmpInflasiData(req, res);
});

module.exports = router;
