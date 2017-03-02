/**
 * 对 bind 的解析
 * https://segmentfault.com/a/1190000007342882
 * 1.绑定 this ，绑定传参（bind上的 this ，args）
 * 2.绑定动态参数（返回函数的调用时的参数）
 * 3.继承原来函数的prototype
 * 4.绑定this时，需要注意 调用时和new两种情况
 * Created by Rain on 2017/3/1.
 */

Function.prototype.bind2 = function (oThis) {

  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind2 只能是一个函数的调用")
  }

  //获取 需要 绑定的 后面的参数（去掉需要绑定 this）
  var aArgs = Array.prototype.slice.call(arguments, 1);
  //保存当前对象的上下文
  var fToBind = this;

  var fNOP = function () {
  };
  var fBound = function () {
    //修改当前函数的绑定对象（上下文）
    return fToBind.apply(
        //1.函数调用时(this 为global）判定oThis 有时绑定oThis 否则this
        //2.new创建时，因为this 指向a函数本身，（？？？这个地方存在疑惑）
        this instanceof fNOP ? this : oThis || this, //this （调用和new）两种的绑定问题
        aArgs.concat(Array.prototype.slice.call(arguments)) //之前绑定的参数和 现在 后面调用时 传入的参数(1 2)都在这
    )
  };

  fNOP.prototype = this.prototype;//3.继承原来函数的prototype
  fBound.prototype = new fNOP();

  return fBound;
};

function a() {
  console.log(this.a, "a函数");
}

a();

var test = a.bind2({a: 23}, 432);

test();

var t2=new test();