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


///第二个例子
var SingletonTester = (function () {
  function Singleton(args) {
    var args = args || {};

    this.name = 'SingletonTester';

    this.pointX = args.pointX || 6;
    this.pointY = args.pointY || 10;
  }

  //实例容器
  var instance;

  var _static = {
    name: 'SingletonTester',

    //获取实例的方法
    //返回Singleton 的实例
    getInstance: function (args) {
      if (instance === undefined) {
        instance = new Singleton(args);
      }
      return instance;
    }
  };
  return _static;
})();

var singletonTest = SingletonTester.getInstance({pointX: 5});
console.log(singletonTest.pointX);
