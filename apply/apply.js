function foo(somthing) {
  console.log(this.a, somthing);
}

function bind(fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  }
}

var obj = {
  a: 2
};

var bar = bind(foo, obj);
var b = bar(3);
console.log(b);