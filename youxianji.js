/**
 * 解释  优先级，边城大大
 * https://segmentfault.com/q/1010000008430170
 * https://segmentfault.com/q/1010000004563202?_ea=1650152
 * Created by toonew on 2017/3/4.
 */

function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}

Foo.getName();    //2
getName();  //4
// Foo().getName();  //1  （ return this 指向 全局 ）
getName();  //1
new Foo.getName();  //2  (new Foo 为17(优先级),  .为18  所以为 new (Foo.getName())）
new Foo().getName(); //3  (带有参数列表为18，所以和  . 平级 从左至右一次运算）
new new Foo().getName();//3

//node 运行不会通过。 第三个出问题





