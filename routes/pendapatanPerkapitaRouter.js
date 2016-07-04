var express = require('express');
var pendapatanPerkapitaCtrl = require('../controllers/pendapatanPerkapitaCtrl');
var auth = require('../tokens/index').auth;
var passport = require('passport');
var router = express.Router();
var path = ['/pendapatan-perkapita', '/data'];

/* middleware for select pendapatan perkapita data by id */
router.use(path[0] + path[1] + '/id=:_id', function(req, res, next) {
  return pendapatanPerkapitaCtrl.middlewareData(req, res, next);
});

/* create linear data */
router.post(path[0],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pendapatanPerkapitaCtrl.createModel(req, res);
  }
);

/* create pendapatan perkapita data */
router.post(path[0] + path[1],
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pendapatanPerkapitaCtrl.createData(req, res);
  }
);

/* select linear model */
router.get(path[0], function(req, res) {
  return pendapatanPerkapitaCtrl.selectModel(req, res);
});

/* select linear model by id*/
router.get(path[0] + '/id=:_id', function(req, res) {
  return pendapatanPerkapitaCtrl.selectModelById(req, res);
});

/* select pendapatan perkapita data */
router.get(path[0] + path[1], function(req, res) {
  return pendapatanPerkapitaCtrl.selectData(req, res);
});

/* select pendapatan perkapita data by id */
router.get(path[0] + path[1] + '/id=:_id', function(req, res) {
  return pendapatanPerkapitaCtrl.selectDataById(req, res);
});

/* sort pendapatan perkapita data by key */
router.get(path[0] + path[1] + '&sortBy=:_key&order=:_arg', function(req, res) {
  return pendapatanPerkapitaCtrl.sortDataByKey(req, res);
});

/* limit and sort data by key, arg ['asc', 'desc'] */
router.get(path[0] + path[1] + '/limit=:_count&sortBy=:_key&order=:_arg', function(req, res) {
  return pendapatanPerkapitaCtrl.limitSorByKey(req, res);
});

/* select max min based on key */
router.get(path[0] + path[1] + '&key=:_key&get=:_arg', function(req, res) {
  return pendapatanPerkapitaCtrl.getMaxMinData(req, res);
});

/* get data between date */
router.get(path[0] + path[1] + '&key=:_key&gd=:_gd&ld=:_ld', function(req, res) {
  return pendapatanPerkapitaCtrl.getDataBetweenDate(req, res);
});

/* update all field for choosen data */
router.put(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pendapatanPerkapitaCtrl.updateAllDataFields(req, res);
  }
);

/* update linear model */
router.patch(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pendapatanPerkapitaCtrl.updateModelFields(req, res);
  }
);

/* update data */
router.patch(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pendapatanPerkapitaCtrl.updateDataFields(req, res);
  }
);

/* delete model */
router.delete(path[0] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pendapatanPerkapitaCtrl.deleteModel(req, res);
  }
);

/* delete data */
router.delete(path[0] + path[1] + '/id=:_id',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    return pendapatanPerkapitaCtrl.deleteData(req, res);
  }
);

module.exports = router;
