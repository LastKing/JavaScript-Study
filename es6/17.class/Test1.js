/**
 * Created by Rain on 2016/11/12.
 */
/**
 * 1. 基本
 * 2. constructor
 * 3. 实例对象 （可以通过__proto__添加方法）
 * 4. 不存在变量提升 （class 不会想函数一样提升，定义之前调用就是 错误）
 * 5. class表达式， 可以类似 function 内部使用函数名，已经立即执行类
 * 6. 私有方法   ( ?  这个私有的实现还是有问题）
 * 7. this的指向  ??这个 和  import 模块里面的问题
 */

class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x},${this.y})`
  }

}

var p = new Point(1, 2);
console.log(p.toString());

console.log(typeof Point);
console.log(typeof Point);

console.log(Object.keys(Point.prototype));
console.log(Object.getOwnPropertyNames(Point.prototype));

// constructor  构造方法
class Foo {
  constructor() {
    return Object.create(null);
  }
}

console.log(new Foo() instanceof Foo);


//类的实例对象

// var point = Point(2, 3);  //  TypeError: Class constructor Point cannot be invoked without 'new'

var point2 = new Point(2, 3);

class Point2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x},${this.y})`;
  }
}

var point3 = new Point2(2, 3);

point3.toString();

console.log(
    point3.hasOwnProperty('x'),   //true
    point3.hasOwnProperty('y'),   //true
    point3.hasOwnProperty('toString'),  //false
    point3.__proto__.hasOwnProperty('toString') //true
);

//不存在变量提升

// new Foo(); // SyntaxError: Identifier 'Foo' has already been declared
// class Foo {}

//class 表达式
const MyClass = class Me {
  getClassName() {
    console.log(Me.name);
  }
};

let inst = new MyClass();
inst.getClassName();
// console.log(Me.name); //ReferenceError: Me is not defined

let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

person.sayName();

//私有方法             ？？？？？？？？？？？？？？？？？？？？？？？？？
class Widget {
  // 公有方法
  foo(baz) {
    this._bar(baz);
  }

  //私有方法
  _bar(baz) {
    return this.snaf = baz;
  }
}

var w = new Widget();


// this的指向
class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property 'print' of undefined












