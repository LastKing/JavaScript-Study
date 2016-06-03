/**
 * Created by Rain on 2016/6/1.
 */
/**
 *  循环中for 立即执行函数+局部变量+匿名函数
 */
// var obj = {};
// var events = {m1: 'clicked', m2: 'changed'};
//
// for (var e in events) {
//   (function () {
//     var aValue = e;
//     obj[e] = function () {
//       //var aValue = e;
//       console.log(events[aValue]);
//     };
//   }());
// }
//
// console.log(obj.m1 === obj.m2);  //false
//
// obj.m1();  //clicked
// obj.m2();  //changed


var obj = {};
var events = {m1: 'clicked', m2: 'changed'};

for (var e in events) {
  (function () {
    //var aValue = e;
    obj[e] = function () {
      var aValue = e;
      console.log(events[aValue]);
    };
  }());
}

console.log(obj.m1 === obj.m2);  //false

obj.m1();  //changed
obj.m2();  //changed

/* 出处：https://segmentfault.com/q/1010000005352813   */