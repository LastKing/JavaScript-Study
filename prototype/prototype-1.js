// http://www.cnblogs.com/snandy/archive/2012/09/01/2664134.html
var Person = function () {
};

var p = new Person();
console.log(p.__proto__ === Person.prototype);//true

//prototype 和contructor  (prototype 直接赋值一个对象后导致 constructor 会指向object)
//本身prototype上会有一个constructor  指向构造函数，如果直接重写，会导致这个constructor消失
function Person2(name) {
  this.name = name
}
// 重写原型
Person2.prototype = {
  getName: function () {
  }
};
var p2 = new Person2('jack');
console.log(p2.__proto__ === Person2.prototype);     // true
console.log(p2.__proto__ === p2.constructor.prototype);// false
console.log(p2.__proto__.constructor === Object);    //true


function Person3(name) {                             //构造函数
  this.name = name;
}

Person3.prototype.printName = function () //原型对象
{
  alert(this.name);
};

var person1 = new Person3('Byron');//实例化对象
console.log(person1.__proto__);//Person
console.log(person1.constructor);//自己试试看会是什么吧
console.log(Person3.prototype);//指向原型对象Person
