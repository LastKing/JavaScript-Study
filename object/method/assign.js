/**
 * Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
 * Created by toonew on 2017/3/14.
 */
var obj = {a: 1};

var copy = Object.assign({}, obj);
console.log(copy);

//assign 是浅拷贝
function test() {
  let a = {b: {c: 4}, d: {e: {f: 1}}};
  let g = Object.assign({}, a);
  let h = JSON.parse(JSON.stringify(a));
  console.log(g.d); // { e: { f: 1 } }
  g.d.e = 32;
  console.log('g.d.e set to 32.'); // g.d.e set to 32.
  console.log(g); // { b: { c: 4 }, d: { e: 32 } }
  console.log(a); // { b: { c: 4 }, d: { e: 32 } }
  console.log(h); // { b: { c: 4 }, d: { e: { f: 1 } } }
  h.d.e = 54;
  console.log('h.d.e set to 54.'); // h.d.e set to 54.
  console.log(g); // { b: { c: 4 }, d: { e: 32 } }
  console.log(a); // { b: { c: 4 }, d: { e: 32 } }
  console.log(h); // { b: { c: 4 }, d: { e: 54 } }
}
test();

function test2(){
  var o1 = { a: 1 };
  var o2 = { b: 2 };
  var o3 = { c: 3 };

  var obj = Object.assign(o1, o2, o3);
  console.log(obj); // { a: 1, b: 2, c: 3 }
  console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
}
test2();






