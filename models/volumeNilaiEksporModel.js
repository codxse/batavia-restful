var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tahun: Date,
  no_hs: String,
  komoditas: String,
  volume: Number,
  nilai: Number,
  grup: String
});
var data = mongoose.model('VolumeNilaiEkspor', dataModel);

module.exports = {
  data: data
}
