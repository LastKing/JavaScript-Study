/**
 * https://zhuanlan.zhihu.com/p/25578222?utm_source=qq&utm_medium=social
 * Created by toonew on 2017/3/6.
 */
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log('parent name:', this.name);
};

function Child(name) {
  this.name = name;
}

Child.prototype = new Person("father");
Child.prototype.constructor = Child;

Child.prototype.sayName = function () {
  console.log('child name:', this.name);
};

var child = new Child('son');
child.sayName();    // child name: son

// 这种方法存在两个缺点：

// 1.子类型无法给超类型传递参数，在面向对象的继承中，我们总希望通过 var child = new Child('son', 'father');
//   让子类去调用父类的构造器来完成继承。而不是通过像这样 new Parent('father') 去调用父类。
// 2.Child.prototype.sayName 必须写在 Child.prototype = new Parent('father'); 之后，不然就会被覆盖掉。