/**
 * https://segmentfault.com/q/1010000008753005
 * Created by Rain on 2017/3/20.
 */
//获取钱数
var str = "我有$2,200,200.20这么多钱 1234";

console.log(str.replace(/[^\d|.]/g, ''));

function calcMoney() {
  var moneyReg = /\$\d+(,\d{3})*(\.\d+)?/;
  var matchRes = str.match(moneyReg);
  var money = 0;

  if (matchRes) {
    money = Number(matchRes[0].replace(/[^\d|.]/g, ''));
  }
  return money;
}

console.log(calcMoney(str));