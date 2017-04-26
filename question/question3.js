/**
 * https://segmentfault.com/q/1010000008554561
 * Created by Rain on 2017/3/3.
 */
this.fullname = 'a';
var obj = {
  fullname: 'b',
  getFullname: () => {  //注意这里绑定了 箭头表达式
    return this.fullname;
  }
};

var person = obj.getFullname;

console.log(obj.getFullname()); // b
console.log(person()); // a