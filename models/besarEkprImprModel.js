var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tahun: Date,
  atribut: String,
  juta_usd: Number
});
var data = mongoose.model('BesarEkprImpr', dataModel);

module.exports = {
  data: data
}
