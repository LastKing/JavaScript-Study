/**
 * 调整构造函数 返回值的 单例模式
 * https://segmentfault.com/q/1010000008532851
 * Created by toonew on 2017/3/1.
 */
function SingleTon() {

  let instance = this;

  this.start_time = 0;
  this.bang = 'Big';

  //重写构造函数
  SingleTon = function () {
    console.log(1);
    return instance;//形成闭包，每次返回这个实例
  }

}

var s1 = new SingleTon();
var s2 = new SingleTon();
console.log(s1 === s2);
console.log(s1.bang);

