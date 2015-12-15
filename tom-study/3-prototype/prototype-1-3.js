/**
 * Created by toonew on 2015/12/16.
 */
var BaseCalculator = function () {
  //为每个实例都声明一个小数位数
  this.decimalDigits = 2;
};

//使用原型给BaseCalculator 拓展2个对象方法

BaseCalculator.prototype.add = function (x, y) {
  return x + y;
};

BaseCalculator.prototype.subtract = function (x, y) {
  return x - y;
};


console.log((new BaseCalculator()).add(1, 3));
