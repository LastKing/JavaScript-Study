/**
 * Created by toonew on 2017/3/6.
 */
class Parent {
  constructor(name) {
    this.name = name;
  }

  doSomething() {
    console.log('parent do something!');
  }

  sayName() {
    console.log('parent name:', this.name);
  }
}

class Child extends Parent {
  constructor(name, parentName) {
    super(parentName);
    this.name = name;
  }

  sayName() {
    console.log('child name:', this.name);
  }
}

const child = new Child('son', 'father');
child.sayName();            // child name: son
child.doSomething();        // parent do something!

const parent = new Parent('father');
parent.sayName();           // parent name: father