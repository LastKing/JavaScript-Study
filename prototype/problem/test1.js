/**
 * Created by Rain on 2016/11/29.
 */
//  https://segmentfault.com/q/1010000006066291
function Dog(argument) {
}

function Huskies(argument) {
}

Huskies.prototype = new Dog();

var dog = new Huskies();
console.log(dog.constructor);//  Dog

//如果修改dog
function Dog2(argument) {
  this.__proto__ = {};
}

function Huskies2(argument) {
}

Huskies2.prototype = new Dog2();

var dog2 = new Huskies2();
console.log(dog2.constructor);//  Object

//这是个原型链的问题
