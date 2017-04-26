/**
 * Created by toonew on 2017/3/20.
 */
name = "老王";

var person = {
  name: "小明",
  whoName: function () {
    console.log(this.name);
  },
  tellMe: function () {
    var that = this;
    (function (callback) {
      callback.apply(that);
    })(that.whoName);
  }
};

person.tellMe();//此处不能修改





