var should = require('should');
var sinon = require('sinon');

describe('Ikhtisar Controller Tests:', function() {
  describe('Post', funtion(){
    it('should not allow empty fields on post', function() {
      var Ikhtisar = function(Ikhtisar){this.save = function(){}};
      var req = {
        body: {
          kategori: "True",
          persen: 1,
          tahun: "2000-01-01",
          rincian: "True",
          jumlah: 1
        }
      }
      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      }

      var ikhtisarCtrl = require('../controllers/ikhtisarCtrl');
      ikhtisarCtrl.create(req. res);
      res.status.calledWith(400).should.equal(true, 'Bad Status' + res.status.args[0][0]);
      res.send.calledWith('All fields required').should.equal(true);
    })
  })
})
