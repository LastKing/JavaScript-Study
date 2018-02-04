/**
 * Created by Rain on 2016/9/7.
 */
//1. 属性拦截  （重载  点运算符  ）
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});

obj.count = 1; // setting
++obj.count;   // getting / setting

console.log(obj.count); // getting  2

//2. 拦截读取属性行为的例子
var proxy = new Proxy({}, {
  get: function (target, property) {
    return 35;
  }
});

proxy.name = 43242;

console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.title);
//注意，要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。

//3. 如果handler没有设置任何拦截，那就等同于直接通向原对象。
var target = {};
var handler = {};
var proxy2 = new Proxy(target, handler);
proxy2.a = 'b';
console.log(proxy2.a);
console.log(target.a);

//4.一个技巧是将Proxy对象，设置到object.proxy属性，从而可以在object对象上调用。
var proxy3 = new Proxy({}, {
  get: function (target, property) {
    return 35;
  }
});

let obj3 = Object.create(proxy3);
console.log(obj3.time);


//5.同一个拦截器函数，可以设置拦截多个操作。
var handler2 = {
  get: function (target, name) {
    if (name = 'prototype') {
      return Object.prototype;
    }
    return 'Hello' + name;
  },

  apply: function (target, thisBinding, args) {
    return args[0];
  },

  construct: function (target, args) {
    return {value: args[1]};
  }
};

var fproxy = new Proxy(function (x, y) {
  return x + y;
}, handler2);

console.log(fproxy(1, 2));      //apply
console.log(new fproxy(1, 2)); //construct
console.log(fproxy.prototype === Object.prototype);
console.log(fproxy.foo);










