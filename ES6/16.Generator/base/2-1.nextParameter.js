/**
 * next 参数模式
 * 区别一个东西
 * yield 总是返回结果给next()时，返回运算结果
 *       但他所处表达式中，它总是返回undefined  就比如生成器函数中  x= 1 + yield 1  ==> x= 1 + undefined
 * next中的参数就能弥补yield 在表达式中总是为undefined的缺陷
 * Created by Rain on 2018/4/16
 */

function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
console.log(a.next());  //{ value: 6, done: false }
console.log(a.next());  //{ value: NaN, done: false }
console.log(a.next());  //{ value: NaN, done: true }

var b = foo(5);         //x=5
console.log(b.next());  //计算x+1 返回6
//计算y=2 * 12  （本来应该是 undefined 但是因为next 传入了值，所以yield从undefined变成了12）
//再次遇到yield 执行 y/3  返回8
console.log(b.next(12));
//将13 代入  yield (y/3)=13 ;所以z=13;
//最后 x=5 y=24 z=13
console.log(b.next(13));//计算
//  （注意：别弄错，这里不是表示yield 后面的运算）
