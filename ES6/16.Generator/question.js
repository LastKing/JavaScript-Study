/**
 * https://segmentfault.com/q/1010000008743811
 *
 * generator 生成器 与  解构赋值联动..
 * 生成器 会保持 函数的作用状态，next 之后 会 恢复
 * Created by toonew on 2017/3/19.
 */
function* test() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var [fir, sec, thr, four, five, six]=test();
console.log(fir, sec, thr, four, five, six);