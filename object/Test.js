/**
 * Created by toonew on 2016/4/14.
 */
var x = 10;

//创建一个对象
var obj = {
  x: 20,
  f: function () {
    console.log(this.x);
    var that = this;
    var foo = function () {
      console.log(that.x);
    };
    foo();
  }
};
obj.f();