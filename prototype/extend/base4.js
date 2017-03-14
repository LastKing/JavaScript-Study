/**
 * Created by toonew on 2017/3/6.
 */
function Parent(name) {
  this.name = name;
}
Parent.prototype.sayName = function () {
  console.log('parent name:', this.name);
};

function Child(name, parentName) {
  Parent.call(this, parentName);
  this.name = name;
}

function inheritPrototype(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);   //修改
  Child.prototype.constructor = Child;
}

inheritPrototype(Parent, Child);

Child.prototype.sayName = function () {
  console.log('child name:', this.name);
};

var parent = new Parent('father');
parent.sayName();      // parent name: father

var child = new Child('son', 'father');
child.sayName();       // child name: son