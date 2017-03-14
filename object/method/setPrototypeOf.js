/**
 * 方法设置一个指定的对象的原型 ( 例如,内置的 [[Prototype]]属性）到另一个对象或  null。
 * Created by toonew on 2017/3/14.
 */
function Person() {

}
var p = new Person();

var o2 = {
  say: 2
};

var o3 = Object.setPrototypeOf(p, o2);

console.log(o3);

// 典型的例子就是 util.inherits