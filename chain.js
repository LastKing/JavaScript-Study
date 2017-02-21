/**
 * Created by toonew on 2017/2/22.
 */
function add(x) {
  function add(y) {
    return x + y;
  }

  add.prototype.toString = function () {
    return x;
  };

  add.prototype.valueOf = function () {
    return x;
  };

  return add;
}


console.log(add(3)(3));