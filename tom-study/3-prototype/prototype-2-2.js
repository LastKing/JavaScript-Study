/**
 * Created by toonew on 2015/12/16.
 */

function Foo() {
  this.add = function (x, y) {
    return x + y;
  }
}


Foo.prototype.add = function (x, y) {
  return x + y + 10;
};

Object.prototype.subtract = function (x, y) {
  return x - y;
};

var f = new Foo();
console.log(f.add(1, 2));
console.log(f.subtract(1, 2)); //结果是-1


/** 此处尚待考证*/
//function Foo() {}
//Foo.prototype = 1; // 无效