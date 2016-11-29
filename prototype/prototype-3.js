/**
 * Created by Rain on 2016/11/7.
 */
/// 以下 所有资料来自于 王鹏福
/// http://www.cnblogs.com/wangfupeng1988/p/4001284.html
console.log(typeof(x));    // undefined
console.log(typeof(10));   // number
console.log(typeof('abc')); // string
console.log(typeof(true));  // boolean

console.log(typeof(function () {
}));  //function

console.log(typeof([1, 'a', true]));  //object
console.log(typeof ({a: 10, b: 20}));  //object
console.log(typeof (null));  //object
console.log(typeof (new Number(10)));  //object

function fn() {
}
console.log(fn instanceof Object);//true

// var obj = {a: 10, b: 20};
// var arr = [5, 'x', true];   ///本质等于下面的代码

var obj = new Object();
obj.a = 10;
obj.b = 20;

var arr = new Array();
arr[0] = 5;
arr[1] = 'x';
arr[2] = true;

console.log(typeof(Object));// function
console.log(typeof(Array));// function

///////////*************从上面得出  对象是由 函数来创建的

///prototype
function Test() {
  var test = 'tes';
  this.a = 'test';
}
Test.prototype.name = 'toonew';
Test.prototype.getYear = function () {
  return 1993
};

console.log(Object.prototype);

var test = new Test();
console.log(test.name);
console.log(test.getYear());// 每个对象都有一个 __proto__  隐式原型
console.log(test.__proto__ === Test.prototype);//true


var obj2 = {};
console.log(obj2.__proto__ === Object.prototype);// true
console.log(Test.prototype.__proto__ === Object.prototype);


console.log(Test);


var BaseCalculator = function () {
  this.decimalDigits = 2;
};

BaseCalculator.prototype = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  }
};

function Calculator() {
  //为每个实例都声明一个税收数字
  this.tax = 5;
}

Calculator.prototype = new BaseCalculator();

var cala = new Calculator();
console.log(cala);

