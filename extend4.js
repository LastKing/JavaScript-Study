/**
 * Created by toonew on 2017/3/2.
 */
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};

function Son(age) {
  this.age = age;
}
Son.prototype = new Person("Nicholas");
Son.prototype.getAge = function () {
  return this.age;
};

var son1 = new Son(5);
console.log(son1.getName());//有疑问