var test = 'global';

var c = function () {
  var test = 'test';
  return {
    pre: function () {
      console.log(this.test);
      return 'ste';
    }
  }
}();

console.log(c.pre());

/*返回的是
 {
 pre:function(){};
 }
 这个并无test属性，所以 无法调用到test。
 */
//  https://segmentfault.com/q/1010000004702940?_ea=697000