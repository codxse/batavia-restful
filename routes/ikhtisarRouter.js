var express = require('express');

var router = express.Router();
var ikhtisarCtrl = require('../controllers/ikhtisarCtrl');

router.use('/ikhtisar-statistiks/id=:_id', function(req, res, next) {
  return ikhtisarCtrl.middleware(req, res, next);
});

router.post('/ikhtisar-statistiks', function(req, res) {
  return ikhtisarCtrl.create(req, res);
});

router.get('/ikhtisar-statistiks', function(req, res) {
  return ikhtisarCtrl.select(req, res);
});

router.get('/ikhtisar-statistiks/id=:_id', function(req, res) {
  return ikhtisarCtrl.selectById(req, res);
});

router.get('/ikhtisar-statistiks&sortBy=:_key&order=:_arg', function(req, res) {
  return ikhtisarCtrl.sorByKey(req, res);
});

router.get('/ikhtisar-statistiks/key=:_key&get=:_arg', function(req, res) {
  return ikhtisarCtrl.getMaxMin(req, res);
});

router.get('/ikhtisar-statistiks/key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return ikhtisarCtrl.getDateBetween(req, res);
});

router.put('/ikhtisar-statistiks/id=:_id', function(req, res) {
  return ikhtisarCtrl.updateAll(req, res);
});

router.patch('/ikhtisar-statistiks/id=:_id', function(req, res) {
  return ikhtisarCtrl.update(req, res);
});

router.delete('/ikhtisar-statistiks/id=:_id', function(req, res) {
  return ikhtisarCtrl.delete(req, res);
});

module.exports = router;
