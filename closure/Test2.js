/**
 * Created by Rain on 2016/3/28.
 */

function Foo1() {
  var result = [];
  for (var i = 0; i < 10; i++) {
    result[i] = function () {
      return i;
    };//这里有自执行了
  }
  return result;
}

console.log(Foo1()[0](), Foo1()[1]());

function Foo2() {
  var result = [];
  for (var i = 0; i < 10; i++) {
    result[i] = function () {
      return i;
    }();//这里有自执行了
  }
  return result;
}

console.log(Foo2());


function Foo3() {
  var result = [];
  for (var i = 0; i < 10; i++) {
    result[i] = function (num) {
      return function () {
        return num;
      };//这里有自执行了
    }(i);
  }
  return result;
}

console.log(Foo3()[0](), Foo3()[1]());


