/**
 * Created by toonew on 2015/12/16.
 */

var Calculator = function (decimalDigits, tax) {
  this.decimalDigits = decimalDigits;
  this.tax = tax;
};

Calculator.prototype = function () {
  add = function (x, y) {
    return x + y;
  };

  subtract = function (x, y) {
    return x - y;
  };

  return {
    add: add,
    subtract: subtract
  }
}();

var test = new Calculator();
console.log(test.add(1, 3));
