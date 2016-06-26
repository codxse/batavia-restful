var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ikhtisarModel = new Schema({
  tahun: Date,
  rincian: String,
  jumlah: Number,
  kategori: String,
  persen: Number
});

module.exports = mongoose.model('Ikhtisar', ikhtisarModel);
