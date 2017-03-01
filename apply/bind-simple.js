/**
 * Created by Rain on 2017/3/1.
 */

Function.prototype.bind2 = function (oThis) {

  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind2 只能是一个函数的调用")
  }

  var aArgs = Array.prototype.slice.call(arguments, 1);
  var fToBind = this;
  var fNOP = function () {
  };
  var fBound = function () {
    return fToBind.apply(
        this instanceof fNOP ? this : oThis || this,
        aArgs.concat(Array.prototype.slice.call(arguments))
    )
  };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound();
};
