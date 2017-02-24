/**
 * 出处： https://segmentfault.com/q/1010000008466747
 * Created by Rain on 2017/2/24.
 */
function Fun() {
  console.log(this);
  this.name = "mary";
  this.sec = function () {
    console.log("sec");
  }
}

function CopyFun() {
  // Fun.call(this);

  // this.fun = Fun;
  // this.fun();

  fun = Fun.bind(this);
  fun();
  //以上三种 相对等同，都是讲this 绑定到Fun 使Fun的本身的所有this属性挂钩到 当前构造函数上
}

var fun = new CopyFun();

fun.sec();  // sec
console.log(fun.name);  // mary
console.log(fun.hasOwnProperty("sec"));  // true

//this.fun()的确没有返回值（怎么理解这个正常函数调用呢？
// 这里我认为是在调用实例的fun方法了，所以fun方法里面的this指向的是实例），
// 但它执行体里 this指向的就是CopyFun的实例，那么this.name等就是在给实例赋值成员了。