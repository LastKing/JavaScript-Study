/**
 * Created by Rain on 2017/5/8.
 */
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();
console.log(g.next());
console.log(g.return('foo'));
console.log(g.next());

//return 会在finally结束之后再执行。
function* numbers() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}
var g2 = numbers();
console.log(g2.next()); // { value: 1, done: false }
console.log(g2.next()); // { value: 2, done: false }
console.log(g2.return(7)); // { value: 4, done: false }
console.log(g2.next()); // { value: 5, done: false }
console.log(g2.next()); // { value: 7, done: true }

