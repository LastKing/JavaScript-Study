/**
 * Created by Rain on 2015/8/15.
 */
aQuery = function (selector, context) {
  return new aQuery.prototype.init(selector, context);
};

aQuery.prototype = {
  init: function () {
    this.age = 18;
    return this;
  },
  name: function () {
  },
  age: function () {
  }
};

aQuery.prototype.init.prototype = aQuery.prototype;

console.log(aQuery());

/**
 * 此处的感悟
 * 1.Jquery是无new 设计，所以必须要返回一个new好的对象
 * 2.aQuery()中直接运行 new aQuery() 返回对象会死循环
 * 3.init 函数， 如果直接返回 this，确实能够返回  aQuery.prototype 对象上的所有方法，但是如果init中调用了this，可能产生覆盖
 * 4.将init 方法 new下 产生一个 新的对象 ，但是这样的话 init的 this 就指向 init 自己产生的对象，prototype上的方法就丢掉了
 * 5.所以将  init.prototype  重新指向jquery.prototype 。这样就可以 init 的原型链上找到 aQuery上的方法了
 *
 * 最后：这样  aQuery 就能不通过new 直接调用，并且隔离作用域
 */
