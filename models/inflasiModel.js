var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tahun: Date,
  inflasi_jakarta: Number,
  inflasi_nasional: Number,
  keterangan: String

});
var data = mongoose.model('DataInflasi', dataModel);

var linearModel = new Schema({
  model: {
    coefficient: Number,
    slope: Number,
    correlation_coefficient: Number
  },
  data: [{
    type: Schema.ObjectId,
    ref: 'DataInflasi'
  }]
});
var linear = mongoose.model('LinearInflasi', linearModel);

module.exports = {
  data: data,
  linear: linear
}
