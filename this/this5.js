/**
 * Created by toonew on 2016/3/28.
 */
var number = 2;
var obj = {
  number: 4,
  /*匿名函数自调*/
  fn1: (function () {
    var number;
    this.number *= 2;//4

    number = number * 2;//NaN
    number = 3;
    return function () {
      var num = this.number;
      this.number *= 2;
      console.log(num);
      number *= 3;
      console.log(number);
    }
  })()
};

var fn1 = obj.fn1;

console.log(number);//4....

fn1();//9

obj.fn1();//27

console.log(global.number);//8....

console.log(obj.number);//8


//这个 node 和 浏览器之间 的处理有差异。
