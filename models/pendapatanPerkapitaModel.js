var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var dataModel = new Schema({
  tahun: Date,
  perkapita_jakarta: Number,
  perkapita_nasional: Number,
  keterangan: String

});
var data = mongoose.model('DataPendapatanPerkapita', dataModel);

var linearModel = new Schema({
  model: {
    coefficient: Number,
    slope: Number,
    correlation_coefficient: Number
  },
  data: [{
    type: Schema.ObjectId,
    ref: 'DataPendapatanPerkapita'
  }]
});
var linear = mongoose.model('LinearPendapatanPerkapita', linearModel);

module.exports = {
  data: data,
  linear: linear
}
