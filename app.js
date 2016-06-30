var express = require('express');
var bodyParser = require('body-parser');

/* configuration goes here */
var config = require('./config');
var port = config.port;
var db = config.database;
var vAPI = config.versions[0];

/* tell the browser this is api pages */
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* all router goes here */
var ikhtisarRouter = require('./routes/ikhtisarRouter');
var umpInflasiRouter = require('./routes/umpInflasiRouter');
var pertumbuhanEkonomiRouter = require('./routes/pertumbuhanEkonomiRouter');
var inflasiRouter = require('./routes/inflasiRouter');
var pendapatanPerkapitaRouter = require('./routes/pendapatanPerkapitaRouter');
var strukturEkonomiRouter = require('./routes/strukturEkonomiRouter');

app.use(vAPI, ikhtisarRouter);
app.use(vAPI, umpInflasiRouter);
app.use(vAPI, pertumbuhanEkonomiRouter);
app.use(vAPI, inflasiRouter);
app.use(vAPI, pendapatanPerkapitaRouter);
app.use(vAPI, strukturEkonomiRouter);

/* view for documentation goes here */
app.get('/', function(req, res) {
  res.redirect(301, vAPI);
});

app.get(vAPI, function(req, res) {
  res.send('Batavia RESTful service');
});

app.listen(port, function() {
  console.log('Here we are @' + port);
});
