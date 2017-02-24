/**
 * 出处： https://segmentfault.com/q/1010000004499240
 * Created by toonew on 2016/3/28.
 */
number = 2;  //浏览器里面写var 可以，node 里面var  为局部，并不在global上。
var obj = {
  number: 4,
  /*匿名函数自调*/
  fn1: (function () {
    var number;
    this.number *= 2;//4

    number = number * 2;//NaN
    number = 3;
    return function () {
      this.number *= 2;
      number *= 3;
      console.log(number);
    }
  })()
};

var fn1 = obj.fn1;   //1.自执行函数中 返回函数的外部只做了一次this.number操作，所以外部number为4

console.log(number);//4....

fn1();//9   （因为闭包的原因，保持了外部的number，并且*3，所以 为9）

obj.fn1();//27  （内部的闭包函数只会执行一次，所以所以number的会被一直保存下来，所以的当再执行内部function时，为 9*3）

console.log(global.number);//8....  （因为内部函数又执行了一次，所以全局number 再次*2） （需要注意为fn1是作为函数调用所以this为global)

console.log(obj.number);//8     （obj.fn1为方法调用所以作用于只想obj ，改变上的是 obj的number属性）


//这个 node 和 浏览器之间 的处理有差异，在于模块上 对于当前文件的var  表示的变量，node为当前模块的私有的，没有var才会在global上
//（这个理解不知道有没有错。。）
