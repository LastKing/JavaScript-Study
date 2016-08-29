/**
 * Created by Rain on 2016/8/16.
 */
var {foo, bar}={foo: 'aaa', bar: 'bbb'};
console.log(foo, bar);

var {baz}={foo: 'aaa', bar: 'bbb'};
console.log(baz);

// 避免将大括号放在行首，JavaScript将其解释为代码块.
var x = 0;
({x} == {x: 1});

//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。
var {foo: baz2} = {foo: 'aaa', bar: 'bbb'};
console.log(baz2); // "aaa"

//不紧可以复制 参数，也可以复制方法
let {log, sin, cos} = Math;

var arr = [1, 2, 3];
var {0 : first, [arr.length - 1] : last} = arr;
first // 1
last // 3
console.log(first, last);
