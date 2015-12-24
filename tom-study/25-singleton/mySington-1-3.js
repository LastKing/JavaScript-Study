/**
 * Created by toonew on 2015/12/25.
 */


var mySingleton = (function () {
  var instantiated;

  function init() {
    //这是定义代码
    return {
      publicMethod: function () {
        console.log('hello word');
      },
      publicProperty: 'test'
    };
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

/*调用公有的方法来获取实例:*/
mySingleton.getInstance().publicMethod();
mySingleton.getInstance().publicMethod();
