/**
 * 阮一峰es6：　http://es6.ruanyifeng.com/#docs/generator
 * Created by toonew on 2017/3/19.
 */
function* helloWorldGenerator() {
  var hello = yield "hello";  //这里 并不会吧值 赋值给hello 变量
  console.log('function inner log hello : ' + hello);
  yield "world";
  return "end";
}

//即这个函数有三个状态： hello 、world 、return 语句

//返回   一个指向内部状态的对象（一个遍历的对象）
var hw = helloWorldGenerator();

console.log(hw.next());
console.log(hw.next().value);
console.log(hw.next());
console.log(hw.next());
