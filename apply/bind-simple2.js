/**
 * Created by Rain on 2017/3/1.
 */

Function.prototype.bind2 = function () {
  var _this = Array.prototype.slice.call(arguments, [0, 1]);

  var that = this;
  return function () {
    that.apply(_this[0], args)
  }
};

function foo(somthing) {
  console.log(this.a, somthing);
}

var obj = {
  a: 2
};
//绑定this
var bar = foo.bind2(obj);
bar(3); // 2   3

