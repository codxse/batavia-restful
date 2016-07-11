var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tahun: Date,
  komponen: String,
  persen_inflasi: Number,
  persen_kontribusi: Number
});
var data = mongoose.model('KomponenInflasi', dataModel);

module.exports = {
  data: data
}
