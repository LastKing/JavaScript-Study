/**
 * Created by Rain on 2017/5/8.
 */
//状态机
//1. 普通实现
var ticking = true;

var clock = function () {
  if (ticking)
    console.log('Tick!');
  else
    console.log('Tock!');
  ticking = !ticking;
};

//2.状态机实现
var clock2 = function*() {
  while (true) {
    console.log('Tick!');
    yield;
    console.log('Tock!');
    yield;
  }
};
var c2=clock2();
c2.next();
c2.next();
c2.next();
//防止外部变量被修改，更安全。



