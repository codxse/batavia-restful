var express = require('express');

var router = express.Router();
var ikhtisarCtrl = require('../controllers/ikhtisarCtrl');

router.use('/ikhtisar-statistiks/:_id', function(req, res, next) {
  return ikhtisarCtrl.middleware(req, res, next);
});

router.post('/ikhtisar-statistiks', function(req, res) {
  return ikhtisarCtrl.create(req, res);
});

router.get('/ikhtisar-statistiks', function(req, res) {
  return ikhtisarCtrl.select(req, res);
});

router.get('/ikhtisar-statistiks/:_id', function(req, res) {
  return ikhtisarCtrl.selectById(req, res);
});

router.put('/ikhtisar-statistiks/:_id', function(req, res) {
  return ikhtisarCtrl.updateAll(req, res);
});

router.patch('/ikhtisar-statistiks/:_id', function(req, res) {
  return ikhtisarCtrl.update(req, res);
});

router.delete('/ikhtisar-statistiks/:_id', function(req, res) {
  return ikhtisarCtrl.delete(req, res);
});

module.exports = router;
