/**
 * Created by Rain on 2017/5/8.
 */
var co = require('co');

co(function*() {
  console.time('test1');
  yield sleep(1000);
  console.timeEnd('test1');
});

function sleep(ms) {
  return function (cb) {
    setTimeout(cb, ms);
  }
}
