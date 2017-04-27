/**
 * Created by Rain on 2015/12/10.
 */
//every()与some()方法都是JS中数组的迭代方法。
//every()是对数组中的每一项运行给定函数，如果该函数对  都  返回true,则返回true
// some()是对数组中每一项运行指定函数，  如果该函数对某一项返回true,则返回true

var temp = {
  "chargeCode": "9add8d30-8909-11e5-a9ce-43594fc755ac",
  "displayId": "xxx-xxx-xxx",
  "times": 735,
  "rechargeTime": "2015/12/29 23:22:22"
};

//var temp = {"times": 782, "rechargeTime": "2015/12/29 23:22:22"};

//var nullCheck = [temp.chargeCode, temp.times, temp.displayId, temp.rechargeTime];
var nullCheck = [temp.chargeCode, temp.times, temp.displayId, temp.rechargeTime]
    .every(function (item) {
      console.log(item);
      return item;
    });
console.log(nullCheck);
