/**
 * https://segmentfault.com/q/1010000009195867
 * Created by Rain on 2017/4/26.
 */
function add(a, b) {
  return a + b;
}
function square(a) {
  return a * a;
}
function plusOne(c) {
  return c + 1;
}

var addSquareAndPlusOne = composite(add, square, plusOne);
// function composite(...args) {
//   return function (...arguments) {
//     var init = args[0].apply(null, arguments);
//     return args.slice(1).reduce((total, current) => {
//       return current(total);
//     }, init);
//   }
// }

function composite(...funs) {
  return function (...args) {
    return funs.reduce(function (total, func) {
      return func(typeof total === 'function' ? total.apply(null, args) : total);
    })
  }
}

console.log(addSquareAndPlusOne(1, 2));