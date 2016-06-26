var express = require('express');
var router = express.Router();
var ikhtisarCtrl = require('../controllers/ikhtisarCtrl');

router.get('/ikhtisar-statistiks', function(req, res, next) {
  return ikhtisarCtrl.select(req, res);
});

router.post('/ikhtisar-statistiks', function(req, res) {
  return ikhtisarCtrl.create(req, res);
});

router.get('/ikhtisar-statistiks/:_id'), function(req, res) {
  return ikhtisarCtrl.selectById(req, res);
}

module.exports = router;
