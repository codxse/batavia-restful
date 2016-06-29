var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tahun: Date,
  persen_tumbuh_jakarta: Number,
  persen_tumbuh_nasional: Number,
  keterangan: String

});
var data = mongoose.model('DataPertumbuhanEkonomi', dataModel);

var linearModel = new Schema({
  model: {
    coefficient: Number,
    slope: Number,
    correlation_coefficient: Number
  },
  data: [{
    type: Schema.ObjectId,
    ref: 'DataPertumbuhanEkonomi'
  }]
});
var linear = mongoose.model('LinearPertumbuhanEkonomi', linearModel);

module.exports = {
  data: data,
  linear: linear
}
