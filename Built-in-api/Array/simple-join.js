/**
 * Created by Rain on 2016/12/28.
 */
Array.prototype.join2 = function (str) {
  var hyphen = (str && typeof str === 'string') ? str : ',';
  var result = '';
  for (var i = 0, l = this.length; i < l - 1; i++) {
    result += this[i] + hyphen;
  }
  result += this[i];
  return result;
};

var a = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

var test = Array.prototype.join2.call(a);

console.log(test);


/*
 出处：
 https://segmentfault.com/q/1010000007836104
 */
