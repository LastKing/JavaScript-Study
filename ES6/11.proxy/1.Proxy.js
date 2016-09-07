/**
 * Created by Rain on 2016/9/7.
 */
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

obj.count = 1;
++obj.count;

console.log(obj.count);

var proxy = new Proxy({}, {
  get: function (target, property) {
    return 35;
  }
});

proxy.name = 43242;

console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.title);


var target = {};
var handler = {};
var proxy2 = new Proxy(target, handler);
proxy2.a = 'b';
console.log(proxy2.a);
console.log(target.a);


//Proxy实例
var proxy3 = new Proxy({}, {
  get: function (target, property) {
    return 35;
  }
});

let obj3 = Object.create(proxy3);
console.log(obj3.time);


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

fproxy(1, 2);
new fproxy(1, 2);
console.log(fproxy.prototype === Object.prototype);
console.log(fproxy.foo);










