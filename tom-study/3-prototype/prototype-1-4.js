/**
 * Created by toonew on 2015/12/16.
 */

var BaseCalculator = function () {
  this.decimalDigits = 2;
};

BaseCalculator.prototype = {
  add: function (x, y) {
    return x + y;
  },

  substract: function (x, y) {
    return x - y
  }
};


var Calculator = function () {
  //为每个实例都声明一个税收数字
  this.tax = 5;
};

//这样会指向BaseCalculator的一个实例，并且是同一个，并且带有decimalDigits 属性
Calculator.prototype = new BaseCalculator();
//这样只会指向prototype上的function  不会带有decimalDigits
//Calculator.prototype = BaseCalculator.prototype;

var calc = new Calculator();
console.log(calc.add(2, 2));
//BaseCalculator 里声明的decimalDigits属性，在 Calculator里是可以访问到的
console.log(calc.decimalDigits);

//覆盖之前的add function
Calculator.prototype.add = function (x, y) {
  return x + y + this.tax;
};

var c1 = new Calculator();
console.log(calc.add(1, 1));

