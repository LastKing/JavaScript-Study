/**
 * Created by Rain on 2017/2/27.
 */

Number.prototype.add = function (num) {
  return Number(this.valueOf() + num);
};

Number.prototype.reduce = function (num) {
  return Number(this - num);
};


var a = (10).add(20).reduce(2).add(10);
console.log(a);



