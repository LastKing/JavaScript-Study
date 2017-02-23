/**
 * Created by Rain on 2016/3/28.
 */
var o = {
  m: function () {
    var self = this;
    console.log(this === o);
    console.log(this);
    f();

    function f() {
      //这时候 f 已经成为 在window  这全局变量上了。。
      //this 在运行是  决定指向谁。
      console.log(this === o);
      console.log(self === o);
    }
  }
};
o.m();

