/**
 configurable
 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，也能够被删除。默认为 false。
 enumerable
 当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false。
 数据描述符同时具有以下可选键值：

 value
 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
 writable
 当且仅当该属性的 writable 为 true 时，该属性才能被赋值运算符改变。默认为 false。
 存取描述符同时具有以下可选键值：

 get
 一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值。默认为 undefined。
 set
 一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认为 undefined。

 * Created by toonew on 2017/3/14.
 */
var o = {};

Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(o);

var bValue;
Object.defineProperty(o, 'b', {
  get: function () {
    return bValue;
  },
  set: function (newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true
});
o.b = 23;
console.log(o.b);

// 数据描述符和存取描述符不能混合使用
// Object.defineProperty(o, "conflict", { value: 0x9f91102,
//   get: function() { return 0xdeadbeef; } });
// throws a TypeError: value appears only in data descriptors, get appears only in accessor descriptors