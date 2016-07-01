var express = require('express');
var umpInflasiCtrl = require('../controllers/umpInflasiCtrl');
var auth = require('../tokens/index').auth;
var passport = require('passport');
var router = express.Router();
var path = ['/ump-inflasi', '/data'];

/* middleware for select ump and inflasi data by id */
router.use(path[0] + path[1] + '/id=:_id', function(req, res, next) {
  return umpInflasiCtrl.middlewareData(req, res, next);
});

/* create linear data */
router.post(path[0],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return umpInflasiCtrl.createModel(req, res);
  }
);

/* create ump and inflasi data */
router.post(path[0] + path[1],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return umpInflasiCtrl.createData(req, res);
  }
);

/* select linear model */
router.get(path[0], function(req, res) {
  return umpInflasiCtrl.selectModel(req, res);
});

/* select linear model by id*/
router.get(path[0] + '/id=:_id', function(req, res) {
  return umpInflasiCtrl.selectModelById(req, res);
});

/* select ump and inflasi data */
router.get(path[0] + path[1], function(req, res) {
  return umpInflasiCtrl.selectData(req, res);
});

/* select ump and inflasi data by id */
router.get(path[0] + path[1] + '/id=:_id', function(req, res) {
  return umpInflasiCtrl.selectDataById(req, res);
});

/* sort ump and inflasi data by key */
router.get(path[0] + path[1] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return umpInflasiCtrl.sortDataByKey(req, res);
});

/* select max min based on key */
router.get(path[0] + path[1] + '&key=:_key&get=:_arg', function(req, res) {
  return umpInflasiCtrl.getMaxMinData(req, res);
});

/* get data between date */
router.get(path[0] + path[1] + '&key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return umpInflasiCtrl.getDataBetweenDate(req, res);
});

/* update all field for choosen data */
router.put(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return umpInflasiCtrl.updateAllDataFields(req, res);
  }
);

/* update linear model */
router.patch(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return umpInflasiCtrl.updateModelFields(req, res);
  }
);

/* update data */
router.patch(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return umpInflasiCtrl.updateDataFields(req, res);
  }
);

/* delete model */
router.delete(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return umpInflasiCtrl.deleteModel(req, res);
  }
);

/* delete data */
router.delete(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return umpInflasiCtrl.deleteData(req, res);
  }
);

module.exports = router;
