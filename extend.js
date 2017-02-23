/**
 * Created by toonew on 2017/2/23.
 */
//人类class
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.hi = function () {
  console.log("Hi,my name is" + this.name + "I'm" + this.age + "years old now");
}

Person.prototype.LEGS_NUM = 2;
Person.prototype.ARMS_NUM = 2;
Person.prototype.walk = function () {
  console.log(this.name + "is walking...");
};
//学生class
function Student(name, age, className) {
  Person.call(this, name, age);
  this.className = className;
}

Student.protype = Object.create(Person.prototype);
Student.protype.contructor = Student;
Student.prototype.hi = function () {
  cosole.log('Hi,my name is' + this.name + "I'm" + this.age +
    "years old now" + this.className);
};
Student.prototype.learn = function (subject) {
  console.log(this.name + 'is learning' + subject + 'at' + this.className + '.');
};
var bosn = new Student('Bosn', 27, 'Class 3 ,Grade 2');
bosn.hi();
bosn.LEGS_NUM;
bosn.walk();
bosn.learn('math');