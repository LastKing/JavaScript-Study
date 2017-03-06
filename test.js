/**
 * https://segmentfault.com/q/1010000008554561
 * Created by Rain on 2017/3/3.
 */
fullname = 'a';
var obj = {
  fullname: 'b',
  getFullname: () => {
    return this.fullname;
  }
};

var person = obj.getFullname;

console.log(obj.getFullname()); // b
console.log(person()); // b