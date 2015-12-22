/**
 * Created by toonew on 2015/12/22.
 */


(function foo() {
  function bar() {
    console.log(this === global);
  }

  bar();
})();







