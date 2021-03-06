var express = require('express');
var strukturEkonomiCtrl = require('../controllers/strukturEkonomiCtrl');
var auth = require('../tokens/index').auth;
var passport = require('passport');
var router = express.Router();
var path = ['/struktur-ekonomi'];

/* middleware for select by id */
router.use(path[0] + '/id=:_id', function(req, res, next) {
  return strukturEkonomiCtrl.middleware(req, res, next);
});

/* crete data */
router.post(path[0],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return strukturEkonomiCtrl.create(req, res);
  }
);

/* select data */
router.get(path[0], function(req, res) {
  return strukturEkonomiCtrl.select(req, res);
});

/* select data by id */
router.get(path[0] + '/id=:_id', function(req, res) {
  return strukturEkonomiCtrl.selectById(req, res);
});

/* sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return strukturEkonomiCtrl.sorByKey(req, res);
});

/* limit and sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + '/limit=:_count&sortBy=:_key&order=:_arg', function(req, res) {
  return strukturEkonomiCtrl.limitSorByKey(req, res);
});

/* get max or min from selected key */
router.get(path[0] + '/key=:_key&get=:_arg', function(req, res) {
  return strukturEkonomiCtrl.getMaxMin(req, res);
});

/* get date range between grather than (gd) and last than (ld) */
router.get(path[0] + '/key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return strukturEkonomiCtrl.getDateBetween(req, res);
});

/* update all field from given data */
router.put(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return strukturEkonomiCtrl.updateAll(req, res);
  }
);

/* update selected field */
router.patch(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return strukturEkonomiCtrl.update(req, res);
  }
);

/* delete selected data by id */
router.delete(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return strukturEkonomiCtrl.delete(req, res);
  });

module.exports = router;
