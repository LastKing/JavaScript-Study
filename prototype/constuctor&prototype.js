/**
 * Created by Rain on 2016/9/30.
 */
function A() {
  this.a = function () {
    console.log('a');
  }
}

var a = new A();
console.log(a.constructor);
console.log(a.constructor == A);

function B() {
  this.a = function () {
    console.log('a');
  };
  this.b = 'b';
}

B.prototype = {
  sayName: function () {
    console.log('sayName');
  }
};

var b = new B();
console.log(b.constructor); //Object


function C() {
  this.a = function () {
    console.log('a');
  };
  this.b = 'b';
  this.c = 'c';
}

C.prototype = {
  sayName: function () {
    console.log('sayName' + this.c);
  }
};

var c = new C();
console.log(c.constructor);
c.sayName();

