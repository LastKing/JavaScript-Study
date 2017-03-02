/**
 * https://segmentfault.com/a/1190000002662251   (一些实例）
 * Created by Rain on 2016/9/7.
 */
//apply 、call 都是调用函数，直接返回调用结果
//bind 则是创建一个新的函数，并且为其绑定好this，和一些调用参数
function foo(somthing) {
  console.log(this.a, somthing);
}

var obj = {
  a: 2
};
//绑定this
var bar = foo.bind(obj);
bar(3); // 2   3


//第二个例子
x = 9;

var test = {
  x: 81,
  getX: function () {
    return this.x
  }
};
//将方法复制给函数，getX 的 this 从 test --> global
console.log(test.getX());
var test2 = test.getX;
console.log(test2());

//从新绑定this 到test上
console.log(test2.bind(test)());