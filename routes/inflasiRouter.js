var express = require('express');
var inflasiCtrl = require('../controllers/inflasiCtrl');
var auth = require('../tokens/index').auth;
var passport = require('passport');
var router = express.Router();
var path = ['/tingkat-inflasi', '/data'];

/* middleware for select inflasi data by id */
router.use(path[0] + path[1] + '/id=:_id', function(req, res, next) {
  return inflasiCtrl.middlewareData(req, res, next);
});

/* create linear data */
router.post(path[0],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return inflasiCtrl.createModel(req, res);
  }
);

/* create inflasi data */
router.post(path[0] + path[1],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return inflasiCtrl.createData(req, res);
  }
);

/* select linear model */
router.get(path[0], function(req, res) {
  return inflasiCtrl.selectModel(req, res);
});

/* select linear model by id*/
router.get(path[0] + '/id=:_id', function(req, res) {
  return inflasiCtrl.selectModelById(req, res);
});

/* select inflasi data */
router.get(path[0] + path[1], function(req, res) {
  return inflasiCtrl.selectData(req, res);
});

/* select inflasi data by id */
router.get(path[0] + path[1] + '/id=:_id', function(req, res) {
  return inflasiCtrl.selectDataById(req, res);
});

/* sort inflasi data by key */
router.get(path[0] + path[1] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return inflasiCtrl.sortDataByKey(req, res);
});

/* select max min based on key */
router.get(path[0] + path[1] + '&key=:_key&get=:_arg', function(req, res) {
  return inflasiCtrl.getMaxMinData(req, res);
});

/* get data between date */
router.get(path[0] + path[1] + '&key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return inflasiCtrl.getDataBetweenDate(req, res);
});

/* update all field for choosen data */
router.put(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return inflasiCtrl.updateAllDataFields(req, res);
  }
);

/* update linear model */
router.patch(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return inflasiCtrl.updateModelFields(req, res);
  }
);

/* update data */
router.patch(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return inflasiCtrl.updateDataFields(req, res);
  }
);

/* delete model */
router.delete(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return inflasiCtrl.deleteModel(req, res);
  }
);

/* delete data */
router.delete(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return inflasiCtrl.deleteData(req, res);
  }
);

module.exports = router;
