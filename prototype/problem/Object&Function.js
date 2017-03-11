/**
 * https://segmentfault.com/q/1010000002736664
 * 我个人 的理解
 * 所有的F 这样构造函数 的__proto__ 都是指向 Function.prototype
 * 但是  f 这样实例对象 的__proto__ 都是指向 F.prototype  包含（F constructor 和 object__proto__)
 * 看到这里 。。各位看官 是否明白了， f 在这里 就没能通过原型继承，继承到  Function.__proto__
 * 所有 Function.prototype 上所有的 所有属性都在 f 无法找到
 * 记住一点，原型继承  __proto__是指向  构造函数 .prototype ,而不是隐式原型连__proto__。
 *
 * Created by Rain on 2017/3/11.
 */
var F = function () {
};
Object.prototype.a = function () {
};
Function.prototype.b = function () {
};

var f = new F();
console.log(f.a);
console.log(f.b);