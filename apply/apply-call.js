/**
 * Created by Rain on 2016/11/29.
 */
// https://segmentfault.com/q/1010000006980966
//下面这两个例子  并不是 bind 的实现。只是 一个apply的包装，并没有返回一个新的绑定好this的函数
// es6 写法
Function.prototype.myBind1 = function (context, ...rest) {
  return this.apply(context, rest);
};

Function.prototype.myBind2 = function (context, ...rest) {
  return this.call(context, ...rest);
};

// es5 写法
Function.prototype.myBind3 = function () {
  var arg1 = Array.prototype.shift.call(arguments);
  return this.apply(arg1, Array.prototype.slice.call(arguments));
};

Function.prototype.myBind4 = function () {
  var ob = Array.prototype.shift.call(arguments);

  var arg1 = Array.prototype.slice.call(arguments); //将数组转化成 1,2,3,4 这种形式
  var str;
  for (let i = 0; i < arg1.length; i++) {
    if (i = 0) {
      str = arg1[0];
    } else {
      str = "," + arg1[arg1.length - 1];
    }
  }

  return this.call(ob, str);
};

var objct = {
  a: 'a'
};

function test(b, ...rest) {
  console.log(this);
  console.log(...rest);
  console.log(this.a + b);
}

test.myBind1(objct, 1, 2, 3, 4);
test.myBind2(objct, 1, 2, 3, 4);
test.myBind3(objct, 1, 2, 3, 4);
test.myBind4(objct, 1, 2, 3, 4);