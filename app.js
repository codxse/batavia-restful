var express = require('express');
var bodyParser = require('body-parser');

/* configuration goes here */
var config = require('./config');
var port = config.port;
var db = config.database;
var vAPI = config.versions;

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
var komponenInflasiRouter = require('./routes/komponenInflasiRouter');
var volumeNilaiEksporRouter = require('./routes/volumeNilaiEksporRouter');
var besarEkprImprRouter = require('./routes/besarEkprImprRouter');
var nilaiImprProdukGolRouter = require('./routes/nilaiImprProdukGolRouter');
var hargaPanganKonsumenRouter = require('./routes/hargaPanganKonsumenRouter');
var perkemHargaGrosirRouter = require('./routes/perkemHargaGrosirRouter');

app.use(vAPI[0], ikhtisarRouter);
app.use(vAPI[0], umpInflasiRouter);
app.use(vAPI[0], pertumbuhanEkonomiRouter);
app.use(vAPI[0], inflasiRouter);
app.use(vAPI[0], pendapatanPerkapitaRouter);
app.use(vAPI[0], strukturEkonomiRouter);
app.use(vAPI[0], komponenInflasiRouter);
app.use(vAPI[0], volumeNilaiEksporRouter);
app.use(vAPI[0], besarEkprImprRouter);
app.use(vAPI[0], nilaiImprProdukGolRouter);
app.use(vAPI[0], hargaPanganKonsumenRouter);
app.use(vAPI[0], perkemHargaGrosirRouter);

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
