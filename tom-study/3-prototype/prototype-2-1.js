/**
 * Created by toonew on 2015/12/16.
 */
function Foo() {
  this.value = 42;
}

Foo.prototype = {
  method: function () {
  }
};


function Bar() {
}

//设置Bar的prototype属性为 Foo的实例对象
Bar.prototype = new Foo();
Bar.prototype.foo = "hello world！";

//修正Bar.prototype.constructor为Bar本身
Bar.prototype.constructor = Bar;

var test = new Bar();//创建一个Bar新实例


// 原型链
//   test [Bar的实例]
//      Bar.prototype [Foo的实例]
//         { foo: 'Hello World' }
//         Foo.prototype
//            {method: ...};
//            Object.prototype
//            {toString: ... /* etc. */};



