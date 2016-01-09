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
 * 2.new Jquery 直接会死循环
 * 3.init 函数 函数，能够通过this 返回jquery.prototype  但是必须前提自身无this引用，否则指向自身。
 * 4.所以将  init.prototype  指向jquery.prototype  用来保存jquery prototype上的所有参数
 *
 * 最后：这样  aQuery 就能不通过new 直接调用，并且隔离作用域
 */
