/**
 * Created by Rain on 2017/5/8.
 */
function *G() {
}

G.prototype.hello = function () {
  return 'hi';
};

let obj = G();
console.log(obj instanceof G);
console.log(obj.hello());

function *G2() {
  this.a = 11;
}
// let obj2 =new G2();  //G2 is not a constructor
let obj2 = G2();
console.log(obj2.a);   //undefined


//3. 绑定this
function *F() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}

let obj3 = {};
var f = F.call(obj3);

console.log(f.next());  // Object {value: 2, done: false}
console.log(f.next());   // Object {value: 3, done: false}
console.log(f.next());  // Object {value: undefined, done: true}

console.log(obj.a);// 1
console.log(obj.b);// 2
console.log(obj.c);// 3
