var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tanggal: Date,
  komoditas: String,
  harga: Number
});
var data = mongoose.model('DataPerkemHargaGrosir', dataModel);

var histogramModel = new Schema({
  kelas_interval: String,
  frekuensi: Number,
  frekuensi_relatif: Number
});
var histogram = mongoose.model('HistogramPerkemHargaGrosir', histogramModel);

module.exports = {
  data: data,
  histogram: histogram
}
