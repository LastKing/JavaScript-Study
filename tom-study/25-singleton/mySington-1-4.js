/**
 * Created by toonew on 2015/12/25.
 */

var SingletonTester = (function () {
  //参数：传递给单例一个 参数集合
  function Singleton(args) {
    //设置args变量为劫后的参数或者空（如果没有提供的话）
    var args = args || {};

    //设置name参数
    this.name = 'SingletonTester';

    //设置pointX
    this.pointX = args.pointX || 6;//从接受的参数里面获得或者设置默认值

    //设置pointY
    this.pointY = args.pointY || 10;

  }

  //实例容器
  var instance;

  var _static = {
    name: 'SingleTonTester',

    //获取实例的方法
    //返回singleTon的实例
    getInstance: function (args) {
      if (instance == undefined) {
        instance = new Singleton(args);
      }
      return instance;
    }
  };

  return _static;

})();

var singletonTest = SingletonTester.getInstance({pointX: 5});
console.log(singletonTest.pointX); // 输出 5


var singletonTest1 = new SingletonTester({pointX: 5});
console.log(singletonTest1.pointX); // 输出 5

