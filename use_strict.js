/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
 * Created by toonew on 2017/5/26.
 */
"use strict";

//1.禁止不写var 默默创建全局变量（拼写错误。。mdn）
// mistypedVaraible = 17;
// console.log(mistypedVaraible);

//2.禁止对 不可写，只读，不可推展对象赋值
//其次, 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操抛出异常
// NaN='s';
// console.log(NaN);

//3.试图删除不可删除的属性时会抛出异常
// delete Object.prototype; // 抛出TypeError错误

//4.严格模式要求一个对象内的所有属性名在对象内必须唯一
// var o = { p: 1, p: 2 }; // !!! 语法错误 （node6.x并没有报错）
// console.log(o);

//5.严格模式要求函数的参数名唯一
// function test(a, a, c) { //严格报错，非严格以后面为准
//     console.log(a, a, c);
// }
// test(1, 2, 3);

//6.严格模式禁用8进制数字
// var a=0o032;  es6的 0o 这种语法 严格不报错
// var a=0032;     //es5的 0 报错
// console.log(a);

//7.ECMAScript 6中的严格模式禁止设置primitive值的属性.
// false.true = '';
// (14).sailing = 'home';

function fun() {
    return this;
}
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);

