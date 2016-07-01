var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tanggal: Date,
  wilayah: String,
  komoditi: String,
  harga: Number,
  satuan: String
});
var data = mongoose.model('DataHargaPanganKonsumen', dataModel);

var histogramModel = new Schema({
  kelas_interval: String,
  frekuensi: Number,
  frekuensi_relatif: Number
});
var histogram = mongoose.model('HistogramHargaPanganKonsumen', histogramModel);

module.exports = {
  data: data,
  histogram: histogram
}
