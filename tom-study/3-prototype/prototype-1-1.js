/**
 * Created by toonew on 2015/12/16.
 */
var Calculator = function (decimalDigits, tax) {
  this.decimalDigits = decimalDigits;
  this.tax = tax;
};


Calculator.prototype = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  }
};

console.log((new Calculator()).add(1, 3));


