var express = require('express');
var komponenInflasiCtrl = require('../controllers/komponenInflasiCtrl');
var auth = require('../tokens/index').auth;
var passport = require('passport');
var router = express.Router();
var path = ['/komponen-inflasi', '/data2'];

/* middleware for select by id */
router.use(path[0] + '/id=:_id', function(req, res, next) {
  return komponenInflasiCtrl.middleware(req, res, next);
});

/* crete data */
router.post(path[0],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return komponenInflasiCtrl.create(req, res);
  }
);

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

/* limit and sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + '/limit=:_count&sortBy=:_key&order=:_arg', function(req, res) {
  return komponenInflasiCtrl.limitSorByKey(req, res);
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
router.put(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return komponenInflasiCtrl.updateAll(req, res);
  }
);

/* update selected field */
router.patch(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return komponenInflasiCtrl.update(req, res);
  }
);

/* delete selected data by id */
router.delete(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return komponenInflasiCtrl.delete(req, res);
  }
);

/////////////
// DATA 2
/////////////

/* middleware for select by id */
router.use(path[0] + path[1] + '/id=:_id', function(req, res, next) {
  return komponenInflasiCtrl.middleware2(req, res, next);
});

/* crete data */
router.post(path[0] + path[1],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return komponenInflasiCtrl.create2(req, res);
  }
);

/* select data */
router.get(path[0] + path[1], function(req, res) {
  return komponenInflasiCtrl.select2(req, res);
});

/* select data by id */
router.get(path[0] + path[1] + '/id=:_id', function(req, res) {
  return komponenInflasiCtrl.selectById2(req, res);
});

/* sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + path[1] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return komponenInflasiCtrl.sorByKey2(req, res);
});

/* limit and sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + path[1] + '/limit=:_count&sortBy=:_key&order=:_arg', function(req, res) {
  return komponenInflasiCtrl.limitSorByKey2(req, res);
});

/* get max or min from selected key */
router.get(path[0] + path[1] + '/key=:_key&get=:_arg', function(req, res) {
  return komponenInflasiCtrl.getMaxMin2(req, res);
});

/* get date range between grather than (gd) and last than (ld) */
router.get(path[0] + path[1] + '/key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return komponenInflasiCtrl.getDateBetween2(req, res);
});

/* update all field from given data */
router.put(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return komponenInflasiCtrl.updateAll2(req, res);
  }
);

/* update selected field */
router.patch(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return komponenInflasiCtrl.update2(req, res);
  }
);

/* delete selected data by id */
router.delete(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return komponenInflasiCtrl.delete2(req, res);
  }
);

module.exports = router;
