/**
 * 出处：https://segmentfault.com/q/1010000008531805
 * Created by toonew on 2017/3/1.
 */
const compose = f => g => x => f(g(x));

const f = compose(x => x * 4)(x => x + 3);


var compose2 = function (f) {
  return function (g) {
    return function (x) {
      return f(g(x));
    }
  }
};

var f2 = compose2(function (x) {
  return x * 4
})(function (x) {
  return x + 3;
});

console.log(f2(2));

