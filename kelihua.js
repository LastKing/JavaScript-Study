/**
 * Created by Rain on 2017/1/17.
 */
/*
 https://segmentfault.com/q/1010000008137924
 编写一个对参数进行加法运算的CISDI_Cal函数
 函数使用方法：
 CISDI_Cal (0).toString() //输出0
 CISDI_Cal (0)(1).toString() //输出1
 CISDI_Cal (0)(1)(2).toString() //输出3
 var v = CISDI_Cal (0)(1) ; v(2).toString() //输出3
 */

function CISDI_Cal(number1) {

  function plus(number2) {
    number1 += number2;
    return plus;
  }

  plus.toString = function () {
    return number1;
  };

  return plus;
}

console.log(CISDI_Cal(0).toString());//输出0
console.log(CISDI_Cal(0)(1).toString());//输出1
console.log(CISDI_Cal(0)(1)(2).toString()); //输出3
var v = CISDI_Cal(0)(1);
console.log(v(2).toString());//输出3