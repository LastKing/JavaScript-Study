/**
 * Created by Rain on 2017/5/8.
 */
function* foo() {
  yield 'a';
  yield 'b';
  return 'c';
}

function* bar() {
  yield 'x';
  // foo();       //无值 (忽略）
  //yield foo();  //{}返回一个遍历器对象
  var returnValue = yield* foo();  // a    b    （for of 的简写，不会返回return）
  console.log(returnValue);
  yield 'y';
}

for (let v  of bar()) {
  console.log(v);
}


