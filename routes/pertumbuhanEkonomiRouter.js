var express = require('express');
var pertumbuhanEkonomiCtrl = require('../controllers/pertumbuhanEkonomiCtrl');
var auth = require('../tokens/index').auth;
var passport = require('passport');
var router = express.Router();
var path = ['/pertumbuhan-ekonomi', '/data'];

/* middleware for select pertumbuhan ekonomi data by id */
router.use(path[0] + path[1] + '/id=:_id', function(req, res, next) {
  return pertumbuhanEkonomiCtrl.middlewareData(req, res, next);
});

/* create linear data */
router.post(path[0],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pertumbuhanEkonomiCtrl.createModel(req, res);
  }
);

/* create pertumbuhan ekonomi data */
router.post(path[0] + path[1],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pertumbuhanEkonomiCtrl.createData(req, res);
  }
);

/* select linear model */
router.get(path[0], function(req, res) {
  return pertumbuhanEkonomiCtrl.selectModel(req, res);
});

/* select linear model by id*/
router.get(path[0] + '/id=:_id', function(req, res) {
  return pertumbuhanEkonomiCtrl.selectModelById(req, res);
});

/* select pertumbuhan ekonomi data */
router.get(path[0] + path[1], function(req, res) {
  return pertumbuhanEkonomiCtrl.selectData(req, res);
});

/* select pertumbuhan ekonomi data by id */
router.get(path[0] + path[1] + '/id=:_id', function(req, res) {
  return pertumbuhanEkonomiCtrl.selectDataById(req, res);
});

/* sort pertumbuhan ekonomi data by key */
router.get(path[0] + path[1] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return pertumbuhanEkonomiCtrl.sortDataByKey(req, res);
});

/* limit and sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + path[1] + '/limit=:_count&sortBy=:_key&order=:_arg', function(req, res) {
  return pertumbuhanEkonomiCtrl.limitSorByKey(req, res);
});

/* select max min based on key */
router.get(path[0] + path[1] + '&key=:_key&get=:_arg', function(req, res) {
  return pertumbuhanEkonomiCtrl.getMaxMinData(req, res);
});

/* get data between date */
router.get(path[0] + path[1] + '&key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return pertumbuhanEkonomiCtrl.getDataBetweenDate(req, res);
});

/* update all field for choosen data */
router.put(path[0] + path[1] + '/id=:_id', function(req, res) {
  return pertumbuhanEkonomiCtrl.updateAllDataFields(req, res);
});

/* update linear model */
router.patch(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pertumbuhanEkonomiCtrl.updateModelFields(req, res);
  }
);

/* update data */
router.patch(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pertumbuhanEkonomiCtrl.updateDataFields(req, res);
  }
);

/* delete model */
router.delete(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pertumbuhanEkonomiCtrl.deleteModel(req, res);
  }
);

/* delete data */
router.delete(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pertumbuhanEkonomiCtrl.deleteData(req, res);
  }
);

module.exports = router;
