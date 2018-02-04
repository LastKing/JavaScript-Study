/**
 * https://cnodejs.org/topic/542953d42ca9451e1bf3c251
 * Created by Rain on 2017/5/8.
 */
co(function*(input) {
  console.time('test1');
  yield sleep200;
  console.timeEnd('test1');
});


function co(gen) {
  gen = gen();
  next();

  function next(res) {
    var ret;
    ret = gen.next(res);
    //全部结束
    if (ret.done) return;

    //执行回调
    if (typeof ret.value === 'function') {
      ret.value(function () {
        next.apply(this, arguments);
      });
      return 'yield target no supported';
    }
  }
}

function sleep200(cb) {
  setTimeout(cb, 200)
}