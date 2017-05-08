/**
 * Created by Rain on 2017/5/8.
 */
var g = function*() {
  try {
    yield;
  } catch (err) {
    console.error('内部捕获', err);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (err) {
  console.error('外部捕获', err);
}

var g2 = function* () {
  try {
    yield;
  } catch (e) {
    console.log(e);
  }
};

var i2 = g2();
i2.next();
i2.throw(new Error('出错了！'));
// Error: 出错了！(…)

