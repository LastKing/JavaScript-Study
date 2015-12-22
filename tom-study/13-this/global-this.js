/**
 * Created by toonew on 2015/12/22.
 */

/***   node 和 brower ****/
// 显示定义全局对象的属性
this.a = 10; // global.a = 10
console.log(a); // 10

// 通过赋值给一个无标示符隐式
b = 20;
console.log(this.b); // 20

// 也是通过变量声明隐式声明的
// 因为全局上下文的变量对象是全局对象自身
var c = 30;
console.log(this.c); // 30