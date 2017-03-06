/**
 * 闭包的定义： 两个函数，内部函数/ 也可以是对象调用了 外部的变量，外部函数被销毁，仍然可以使用被调用的变量。
 * 并且强调。。这里是指  变量 不是this，this的调用时决定的特性注定使他与闭包无缘，（不过可以用that实现）
 * Created by Rain on 2016/08/09
 */
//1.这个是因为 this 在执行时决定上下文
// scope = "global scope";
//
// function checkscope() {
//   var scope = "local scope";
//
//   function f() {
//     return this.scope
//   }
//
//   return f;
// }
//
// var test = checkscope();
// console.log(test());

//2.而这个就是闭包。
var scope = "global scope";

function checkscope() {
  var scope = "local scope";

  function f() {
    return scope
  }

  return f;
}

var test = checkscope()();
console.log(test);