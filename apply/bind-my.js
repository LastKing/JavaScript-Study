/**
 * Created by Rain on 2016/11/29.
 */
Function.prototype.myBind1 = function (context, ...rest) {
  return this.call(context, ...rest);
};

Function.prototype.myBind2 = function (context, ...rest) {
  return this.apply(context, ...rest)
};

Function.prototype.myBind3 = function () {
  var arg1 = Array.prototype.shift.call(arguments);
  return this.call(arg1, arguments)
};

var objct = {
  test: 'x'
};

function test(...rest) {
  console.log(this);
  console.log(...rest);
}

test.myBind1(objct, 1, 2, 3, 4);
test.myBind2(objct, 1, 2, 3, 4);
test.myBind3(objct, 1, 2, 3, 4);