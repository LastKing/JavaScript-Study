/**
 * Created by Rain on 2016/8/16.
 */
//数组结构
//es5
var a = 1;
var b = 2;
var c = 3;

//es6
var [d,e,f]=[1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
console.log(bar);
console.log(baz);

var [asdf] = [];
var [qwer, asdf] = [1];
// 以上两种情况都属于解构不成功，asdf的值都会等于undefined。

function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);

//默认值

var [defn = true] = [];
console.log(defn); // true




















