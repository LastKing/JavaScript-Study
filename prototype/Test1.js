/**
 * Created by toonew on 2016/3/16.
 */
//http://www.cnblogs.com/snandy/archive/2012/09/01/2664134.html
//var Person = function () {
//};
//
//var p = new Person();
//console.log(p.__proto__ === Person.prototype);


//prototype 和contructor
function Person(name) {
  this.name = name
}
// 重写原型
Person.prototype = {
  getName: function () {
  }
};
var p = new Person('jack');
console.log(p.__proto__ === Person.prototype);// true
console.log(p.__proto__ === p.constructor.prototype);// false