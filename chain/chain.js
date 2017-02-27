/**
 * Created by toonew on 2017/2/22.
 */
function add(x) {
  let fn =  function (y) {
    return add(x + y);
  };

  fn.valueOf = function () {
    return x;
  };

  fn.toString = function () {
    return "" + x;
  };
  return fn;
}

console.log(add(3));
console.log(add(3)(3));
console.log(add(3)(3)(3));