/**
 * Created by toonew on 2017/2/8.
 */
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(obj);
ws.add(foo);

console.log(ws.has(obj)); // true
console.log(ws.has(foo));    // false

console.log(ws.delete(obj));
console.log(ws.has(obj));  // false



