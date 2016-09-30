//http://www.cnblogs.com/snandy/archive/2012/09/01/2664134.html
//var Person = function () {
//};
//
//var p = new Person();
//console.log(p.__proto__ === Person.prototype);


//prototype 和contructor  (prototype 赋值后 constructor 会指向object)
//function Person(name) {
//  this.name = name
//}
//// 重写原型
//Person.prototype = {
//  getName: function () {
//  }
//};
//var p = new Person('jack');
//console.log(p.__proto__ === Person.prototype);// true
//console.log(p.__proto__ === p.constructor.prototype);// false


function Person(name) {                             //构造函数
  this.name = name;
}

Person.prototype.printName = function () //原型对象
{
  alert(this.name);
};

var person1 = new Person('Byron');//实例化对象
console.log(person1.__proto__);//Person
console.log(person1.constructor);//自己试试看会是什么吧
console.log(Person.prototype);//指向原型对象Person
