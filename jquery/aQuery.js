/**
 * Created by Rain on 2015/8/15.
 */


var aQuery = function (selector, context) {
  return new aQuery.prototype.init();
};

aQuery.prototype = {
  init: function () {
    return this;
  },
  name: function () {
    return this.age;
  },
  age:20
};

aQuery.prototype.init.prototype = aQuery.prototype;

console.log(aQuery().name());





