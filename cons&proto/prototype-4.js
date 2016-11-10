/**
 * Created by Rain on 2016/11/10.
 */
function Foo() {
}
var fn1 = new Foo();
var fn2 = new Foo();

var o1 = {};
var o2 = {};

console.log(
    fn1.__proto__ == Foo.prototype,
    fn2.__proto__ == Foo.prototype,// 自定义函数的 隐式原型指向  构造函数的原型

    o1.__proto__ == Object.prototype,
    o2.__proto__ == Object.prototype,//对象的      隐式原型指向  Object的原型

    Foo.prototype.__proto__ == Object.prototype,
    Function.prototype.__proto__ == Object.prototype,  //函数和Function的原型对象的隐式原型都是指向 对象的原型

    Foo.__proto__ == Function.prototype,      //所有 构建函数 和 Function  的隐式原型都指向 Function.prototype
    Object.__proto__ == Function.prototype,
    Function.__proto__ == Function.prototype
);

/**
 * 上面 代码的总结
 * Foo  Object  Function 为函数
 * fn1 fn2 o1 o2 为对象
 *
 * 对象指向他的构造函数的prototype
 *
 * 所有的函数的 隐式原型 指向 Function.prototype
 */
