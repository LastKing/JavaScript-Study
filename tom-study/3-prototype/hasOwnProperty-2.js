/**
 * Created by toonew on 2015/12/16.
 */


var foo = {
  hasOwnProperty: function () {
    return false;
  },

  bar: "Here be dragons"
};

foo.hasOwnProperty('bar');//总是返回false

//使用{}对象的hasOwnProperty并将其上下文设置为foo
({}).hasOwnProperty(foo,'bar');



