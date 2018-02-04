/**
 * Created by Rain on 2016/8/16.
 */
console.log(...[1, 2, 3]);

console.log(1, ...[2, 3, 4], 5);

function push(array, ...items) {
  array.push(...items);
}
var t1 = [];
push(t1, 1, 2, 3, 4, 5, 6, 7, 8);
console.log(t1);

function add(x, y) {
  return x + y;
}

var numbers = [4, 38];
console.log(add(...numbers));

//替代apply方法
// ES5的写法
function f1(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f1.apply(null, args);

//es6
function f2(x, y, z) {
}
var args2 = [0, 1, 2];
f2(...args2);

// ES5的写法
console.log(Math.max.apply(null, [14, 3, 77]));
console.log(Math.max(...[14, 3, 77]));
console.log(Math.max(14, 3, 77));


//拓展运算符的应用
//(1)合并数组
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

// ES5的合并数组
arr1.concat(arr2, arr3);
// ES6的合并数组
var t2 = [...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]

//（2）与解构赋值结合


//未完待续
