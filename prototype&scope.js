/**
 * https://segmentfault.com/q/1010000008667193
 * Created by Rain on 2017/3/13.
 */
x = 20;
var a = {
  x: 15,
  fn: function () {
    var x = 30;
    return function () {
      return this.x;
    };
  }
};
console.log(a.fn()); //function (){this.x}
console.log((a.fn())()); //20
console.log(a.fn()());  //20
console.log(a.fn()() === (a.fn())());//true
console.log(a.fn().call(this)); //20
console.log(a.fn().call(a));  //15

// 这个结果  window 正确,  node 有差异
