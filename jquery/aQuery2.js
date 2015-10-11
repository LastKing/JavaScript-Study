/**
 * Created by Rain on 2015/8/15.
 */


var aQuery = function (selector, context) {
  return new aQuery.prototype.init();
};

aQuery.prototype = {
  init: function () {
    console.log(1);
    return this;
  },
  name: function () {
    console.log(2);
    return this;
  }
};

aQuery.prototype.init.prototype = aQuery.prototype;

console.log(aQuery().init().name());
