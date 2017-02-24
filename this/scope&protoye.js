/**
 * Created by Rain on 2016/3/28.
 */
var scope = "global scope";

//function checkScope() {
//  var scope = 'local scope';
//
//  function f() {
//    return scope;
//  }
//  return f();
//}
//console.log(checkScope());

//function checkScope() {
//  var scope = 'local scope';
//
//  function f() {
//    return scope;
//  }
//
//  return f;
//}
//console.log(checkScope()());

function checkScope() {
  var scope = 'local scope';
  return function () {
    return this.scope;
  }();
}
console.log(checkScope());

