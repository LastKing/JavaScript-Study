/**
 * Created by toonew on 2017/3/6.
 */
function Parent(name) {
  this.name = name;
}
Parent.prototype.sayName = function () {
  console.log('parent name:', this.name);
};
Parent.prototype.doSomthing = function () {
  console.log('parent do something!');
};

function Child(name, parentName) {
  Parent.call(this, parentName);
  this.name = name;
}

Child.prototype.sayName = function () {
  console.log('child name:', this.name);
};

var child = new Child('son');
child.sayName();      // child name: son
child.doSomthing();   // TypeError: child.doSomthing is not a function


//缺点：

// 没有原型，每次创建一个 Child 实例对象时候都需要执行一遍 Parent 函数，无法复用一些公用函数。