/**
 * Created by Rain on 2015/8/14.
 */
var assert = require('power-assert');
describe('Basic Test', function () {
  context('When Callback(high-order function)', function () {
    it('should use `done` for test', function (done) {
      setTimeout(function () {
        assert(true);
        done();
      }, 0);
    });
  });
  context('When promise object', function () {
    it('should use `done` for test?', function (done) {
      var promise = Promise.resolve(1);
      // ¤³¤Î¥Æ¥¹¥È¥³©`¥É¤Ï¤¢¤ëÇ·êˆ¤¬¤¢¤ê¤Þ¤¹
      promise.then(function (value) {
        assert(value === 1);
        done();
      });
    });
  });
});