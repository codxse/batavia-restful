var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tahun: Date,
  rincian: String,
  jumlah: Number,
  kategori: String,
  persen: Number
});
var data = mongoose.model('Ikhtisar', dataModel);

module.exports = {
  data: data
}
