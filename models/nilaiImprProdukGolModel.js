var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  bulan: Date,
  golongan: String,
  nilai_fob: Number
});
var data = mongoose.model('DataNilaiImprProgukGol', dataModel);

var histogramModel = new Schema({
  kelas_interval: String,
  frekuensi: Number,
  frekuensi_relatif: Number
});
var histogram = mongoose.model('HistogramNilaiImprProdukGol', histogramModel);

module.exports = {
  data: data,
  histogram: histogram
}
