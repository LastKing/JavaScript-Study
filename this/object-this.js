/**
 * Created by toonew on 2017/3/14.
 */
 a = 1;
var b = {
  a: 2,
  b: function () {
    console.log(this.a);
  }(),
  f: this.f = function () {
    console.log(this.a);
  }  //这题重点的问题 是对 这个this.f 解析
};

function f() {
  console.log(3);
}
//1 还有一个b.b  自执行函数
f();   //3
b.f(); //2
(b.f)(); //2
(0, b.f)(); //1

//把上面那一段拆开
function test() {
  b = {};
  b.b = function () {
    console.log(this.a);
  };
  b.f = this.f = function () {
    console.log(this.a);
  };
  // 那么从这里就可以看出 this.f会指向当前global也就是最外围的f，
  // 使他修改了最外的f，使它成为了console.log(this.a);
}