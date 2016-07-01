var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;
var db = require('./tokens');

var authMiddleware = passport.use(new Strategy(function(token, cb) {
  db.findByToken(token, function(err, user) {
    if (err) { return cb(err); }
    if (!user) { return cb(null, false); }
    return cb(null, user);
  });
}));

module.exports = {
  auth: authMiddleware
}
