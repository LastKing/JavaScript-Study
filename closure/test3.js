/*
 * 返回方法 f  或者  f();
 */
//1.这个是因为 this 在执行时决定上下文
var scope = "global scope";

function checkscope() {
  var scope = "local scope";

  function f() {
    return this.scope
  }

  return f();
}

var test = checkscope();
console.log(test);

//2.而这个就是闭包。
//    var scope = "global scope";
//
//    function checkscope() {
//        var scope = "local scope";
//
//        function f() {
//            return scope
//        }
//        return f;
//    }
//
//    var test = checkscope()();
//    console.log(test);