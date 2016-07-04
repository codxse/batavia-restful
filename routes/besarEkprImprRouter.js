var express = require('express');
var besarEkprImprCtrl = require('../controllers/besarEkprImprCtrl');
var auth = require('../tokens/index').auth;
var passport = require('passport');
var router = express.Router();
var path = ['/besar-ekspor-impor'];

/* middleware for select by id */
router.use(path[0] + '/id=:_id', function(req, res, next) {
  return besarEkprImprCtrl.middleware(req, res, next);
});

/* crete data */
router.post(path[0],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return besarEkprImprCtrl.create(req, res);
  }
);

/* select data */
router.get(path[0], function(req, res) {
  return besarEkprImprCtrl.select(req, res);
});

/* select data by id */
router.get(path[0] + '/id=:_id', function(req, res) {
  return besarEkprImprCtrl.selectById(req, res);
});

/* sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return besarEkprImprCtrl.sorByKey(req, res);
});

/* limit and sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + '/limit=:_count&sortBy=:_key&order=:_arg', function(req, res) {
  return besarEkprImprCtrl.limitSorByKey(req, res);
});

/* get max or min from selected key */
router.get(path[0] + '/key=:_key&get=:_arg', function(req, res) {
  return besarEkprImprCtrl.getMaxMin(req, res);
});

/* get date range between grather than (gd) and last than (ld) */
router.get(path[0] + '/key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return besarEkprImprCtrl.getDateBetween(req, res);
});

/* update all field from given data */
router.put(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return besarEkprImprCtrl.updateAll(req, res);
  }
);

/* update selected field */
router.patch(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return besarEkprImprCtrl.update(req, res);
  }
);

/* delete selected data by id */
router.delete(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return besarEkprImprCtrl.delete(req, res);
  }
);

module.exports = router;
