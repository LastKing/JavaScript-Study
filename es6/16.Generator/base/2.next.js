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
