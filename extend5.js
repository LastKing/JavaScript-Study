/**
 * https://segmentfault.com/q/1010000008550397
 * http://es6.ruanyifeng.com/#docs/class#Class的继承
 * Created by Rain on 2017/3/3.
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  test() { }
}

class Student extends Person {
  //在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。
  constructor(name, age, no) {
    super(name, age);
    this.no = no
  }

  say() {
    console.log(`name: ${this.name}, age: ${this.age}, no: ${this.no}`)
  }
}

let student = new Student('mrcode', 21, '11403080435');

student.say();