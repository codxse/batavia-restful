var dotenv = require('dotenv');
var mongoose = require('mongoose');

var port = process.env.PORT || 8000;

const environment = dotenv.config();
var host = environment.DB_HOST,
  database = environment.DATABASE,
  user = environment.DB_USER,
  pass = environment.DB_PASS;
var db = mongoose.connect('mongodb://' + user + ':' + pass + '@' + host + '/' + database);

var versions = ['/v1'];

module.exports = {
  port: port,
  versions: versions,
  database: db
}
