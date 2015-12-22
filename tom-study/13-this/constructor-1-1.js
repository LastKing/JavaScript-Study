/**
 * Created by toonew on 2015/12/22.
 */

function A() {
  console.log(this === A); // "a"对象下创建一个新属性
  this.x = 10;
}


var a = new A();
console.log(a.x);

