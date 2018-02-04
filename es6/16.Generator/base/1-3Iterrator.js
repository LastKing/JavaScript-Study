/**
 * Created by Rain on 2017/5/8.
 */
var myIterable = {};
myIterable[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...myIterable]);//[ 1, 2, 3 ]


//生成器 返回一个  可便利对象
function* gen() {
}
var g = gen();
console.log(g[Symbol.iterator]() === g);



