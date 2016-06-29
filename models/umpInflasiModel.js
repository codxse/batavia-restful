var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tahun: Date,
  ump: Number,
  kenaikan_ump: Number,
  inflasi: Number,
  keterangan: String
});
var data = mongoose.model('DataUmpInflasi', dataModel);

var linearModel = new Schema({
  model: {
    coefficient: Number,
    slope: Number,
    correlation_coefficient: Number
  },
  data: [{
    type: Schema.ObjectId,
    ref: 'DataUmpInflasi'
  }]
});
var linear = mongoose.model('LinearUmpInflasi', linearModel);

module.exports = {
  data: data,
  linear: linear
}
