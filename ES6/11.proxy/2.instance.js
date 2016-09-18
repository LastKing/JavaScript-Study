/**
 * Created by Rain on 2016/9/18.
 */
var person = {
  name: '张三'
};

// var proxy = new Proxy(person, {
//   get: function (target, property) {
//     if (property in target) {
//       return target[property];
//     } else {
//       throw new ReferenceError("Property \"" + property + "\" does not exist.")
//     }
//   }
// });
//
// console.log(proxy.name);
// console.log(proxy.age);

//2 get 拦截
function createArray(...elements) {
  let handler = {
    get(target, proKey, receiver){
      let index = Number(proKey);
      if (index < 0) {
        proKey = String(target.length + index);
      }

      return Reflect.get(target, proKey, receiver);
    }
  };

  let target = [];

  target.push(...elements);
  return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);


//3. 实现链式操作
// var pipe = (function () {
//   return function (value) {
//     var funcStack = [];
//     var oproxy = new Proxy({}, {
//       get: function (pipeObject, fnName) {
//         if (fnName === 'get') {
//           return funcStack.reduce(function (val, fn) {
//             return fn(val);
//           }, value);
//         }
//         funcStack.push(global[fnName]);
//         return oproxy;
//       }
//     });
//     return oproxy;
//   }
// }());
//
// var double = n=>n * 2;
// var pow = n=>n * n;
// var reverseInt = n =>n.toString().split("").reverse().join("") | 0;
//
// pipe(3).double.pow.reverseInt.get;










