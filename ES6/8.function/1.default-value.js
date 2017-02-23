/**
 * Created by Rain on 2016/8/12.
 */
function log(x, y) {
  y = y || 'world';

  console.log(x, y);
}

log('Hello');
log('Hello', 'China');
log('Hello', '');


function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

var p = new Point();
console.log(p);

//与解构赋值默认值结合使用
function foo({x, y=5}) {
  console.log(x, y);
}

foo({});
foo({x: 1});
foo({x: 1, y: 2});
// foo();  //TypeError: Cannot match against 'undefined' or 'null'.

function fetch(url, {body='', method='GET', headers={}}) {
  console.log(method);
}

fetch('http://example.com', {});


// fetch('http://example.com'); //报错，不能省略第二个参数

function fetch2(url, {method='GET'}={}) {
  console.log(method);
}

fetch2('http://example.com');//双重默认值，屏蔽没给值的错误


// 写法一 ：函数参数的默认值是空对象，但是设置了对象解构赋值的默认值
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二 ：函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
function m2({x, y} = {x: 0, y: 0}) {
  return [x, y];
}

console.log(m1());
console.log(m2());

// x和y都有值的情况
console.log(m1({x: 3, y: 8}));// [3, 8]
console.log(m2({x: 3, y: 8}));// [3, 8]

//x有值，y无值
console.log(m1({x: 3}));//[ 3, 0 ]
console.log(m2({x: 3}));//[ 3, undefined ]

//x和y都无值
console.log(m1({}));//[ 0, 0 ]
console.log(m2({}));//[ undefined, undefined ]

console.log(m1({z: 3}));
console.log(m2({z: 3}));


//定义了默认值的参数，应该是函数的尾参数,否则无法省略
function f1(x = 1, y) {
  console.log([x, y]);
}

f1();
f1(2);
// f(,1);//报错
f1(undefined, 1);

function f2(x, y = 5, z) {
  console.log([x, y, z]);
}
f2();
f2(1);
// f2(1,,2);//报错
f2(1, undefined, 5);


//undefined 才会触发默认值，null不会
function f3(x = 5, y = 6) {
  console.log(x, y);
}

f3(undefined, null);//// 5 null


//函数的length 属性
console.log(
    (function (a) {
    }).length
);//1

console.log(
    (function (a = 5) {
    }).length
);//0

console.log(
    (function (a, b, c = 5) {
    }).length
);//2
//这是因为length属性的含义是，该函数预期传入的参数个数, 默认值是已经传入。

// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
console.log(
    (function (a = 5, b, c) {
    }).length
);// 0
console.log(
    (function (a, b = 1, c) {
    }).length
);// 0

//作用域
var x_f_4 = 1;

function f4(x_f_4, y = x_f_4) {
  console.log(x_f_4);
}
f3(2);

let x_f_5 = 1;
function f5(y = x_f_5) {
  let x_f_5 = 2;
  console.log(y);
}
f5();

// function f6(y = x) {
//   let x = 2;
//   console.log(y);
// }
// f6();// x不存在


function throwIfMissing() {
  throw new Error('Missing parameter');
}

function foo2(mustBeProvided = throwIfMissing()) {
  return mustBeProvided;
}

foo2('fsda');
