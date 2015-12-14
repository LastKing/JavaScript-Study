/**
 * Created by Rain on 2015/12/14.
 */

//function声明的变量和function有可能只在该function内部
function fc() {
  var test = 'fc';

  return fc = function () {
    console.log('fc - function');
  }
}

var fc1 = new fc();
console.log(fc1.test);
console.log(fc1());

var obj = {
  oj: 'oj',
  objfc: function () {
    console.log('fc')
  }
};

console.log(obj.oj);
console.log(obj.objfc());


(function test() {
}());


var counter = (function () {
  var i = 0;
  return {
    get: function () {
      return i;
    },
    set: function (val) {
      i = val;
    },
    increment: function () {
      return ++i;
    }
  }
}());
console.log(counter.get());
console.log(counter.set(3));
console.log(counter.increment());
console.log(counter.increment()) ;



