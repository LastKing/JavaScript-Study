/**
 * Created by Rain on 2016/11/11.
 */
var Singleton = (function () {
  var instantiated;

  function init() {
    return {
      publicMethod: function () {
        console.log('heelo world');
      }
    }
  }

  return {
    getInstance: function () {
      if (!instantiated) {
        instantiated = init();
      }
      return instantiated;
    }
  }
})();

var s1 = Singleton.getInstance();
var s2 = Singleton.getInstance();
console.log(s1 === s2);

function fn() {
}

var f1 = new fn();
var f2 = new fn();
console.log(f1 == f2);