/**
 * Created by toonew on 2017/3/6.
 */
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function() {
  console.log('parent name:', this.name);
};
Parent.prototype.doSomething = function() {
  console.log('parent do something!');
};

function Child(name, parentName) {
  Parent.call(this, parentName);     // 第二次调用
  this.name = name;
}

Child.prototype.sayName = function() {
  console.log('child name:', this.name);
};

Child.prototype = new Parent();     // 第一次调用
Child.prototype.constructor = Child;

var child = new Child('son');
child.sayName();       // child name: son
child.doSomething();   // parent do something!

//既通过在原型上定义方法实现了函数复用，又保证每个实例都有它自己的属性。

//组合式继承是 JS 最常用的继承模式，但组合继承使用过程中会被调用两次：
// 一次是创建子类型的时候
// 一次是在子类型构造函数的内部