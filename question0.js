/**
 * Created by Rain on 2017/3/6.
 */
// 6. 前端面试题，利用给定接口获得闭包内部对象
//
// 问题： 前端面试题，利用给定接口获得闭包内部对象(https://segmentfault.com/q/1010000002916478)

var o = (function () {
  var person = {
    name: 'Vincent',
    age: 24,
  };
  return {
    run: function (k) {
      return person[k];
    },
  }
}());
// 在不改变上面的代码情况下， 怎么得到原有的 person 对象？
//
// 解决：

Object.defineProperty(Object.prototype, 'self', {
  get: function () {
    return this;
  },
  configurable: true
});
o.run('self'); // 输出 person
// 但如果加上person.__proto__ = null，目前还没找到解决方法。