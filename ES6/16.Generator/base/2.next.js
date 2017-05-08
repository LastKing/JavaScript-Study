/**
 * http://es6.ruanyifeng.com/#docs/generator#next-方法的参数
 * Created by Rain on 2017/5/8.
 */
function* f() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    if (reset) i = -1;
  }
}
//自己 理解上有2个问题
//i重制为-1 ，这是不是减一。。傻叉 。。。自己越来越傻叉了。。。
// 最重要的。。。yield 是在次暂停，并且返回 后面值或者运算值，只有等下次next 进来 才会继续向下运算。
//所以下面 就会有 为true时，i-1; ，经历过++变成0弹出；

var g = f();
console.log(g.next()); //0
console.log(g.next()); //1
console.log(g.next(true)); //
console.log(g.next());
console.log(g.next());

console.log(`另一个例子！`);

//另一个例子
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
console.log(a.next());
console.log(a.next());
console.log(a.next());

var b = foo(5);         //x=5
console.log(b.next());  //计算x+1 返回6
//计算y=2 * 12  （本来应该是 undefined 但是因为next 传入了值，所以yield从undefined变成了12）
//再次遇到yield 执行 y/3  返回8
console.log(b.next(12));
//将13 代入  yield (y/3)=13 ;所以z=13;
//最后 x=5 y=24 z=13
console.log(b.next(13));//计算
//  （注意：别弄错，这里不是表示yield 后面的运算）

// 注意： 由于next方法的参数表示上一个yield表达式的返回值，V8 引擎直接忽略第一次使用next方法时的参数。

function* dataConsumer() {
  console.log('Started');
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  return 'result';
}

let genObj = dataConsumer();
genObj.next();// Started               暂停位置 ： 1.{yield}
console.log(genObj.next('a'));// 1. a              2.{yield}
console.log(genObj.next('b'));// 1. b              3.{yield}

