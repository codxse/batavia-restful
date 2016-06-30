var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tahun: Date,
  persen_kontribusi: Number,
  jenis_sektor: String,
  keterangan: String
});
var data = mongoose.model('StrukturEkonomi', dataModel);

module.exports = {
  data: data
}
