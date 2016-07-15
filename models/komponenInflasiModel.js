var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tahun: Date,
  komponen: String,
  persen_inflasi: Number,
  persen_kontribusi: Number
});
var data = mongoose.model('KomponenInflasi', dataModel);

var dataModel2 = new Schema({
  tanggal: Date,
  komponen: String,
  inflasi: Number
});
var data2 = mongoose.model('KomponenInflasiGeneric', dataModel2);

module.exports = {
  data: data,
  data2: data2
}
