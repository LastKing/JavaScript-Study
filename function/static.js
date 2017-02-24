/**
 * 直接给函数 附加 属性或者方法
 * 类似于 java中的静态方法，但是 有一点 需要注意的是
 * js中的这种静态不能在上实例对象上使用，因为此方法并不在 prototype 上。
 * Created by Rain on 2016/9/2.
 */
function Test(value) {
  this.value = value;
}
Test.v1 = 3;
var test = new Test(2);


console.log(test,test.v1);
