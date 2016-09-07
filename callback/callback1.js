function a(callback) {
  console.log("我是parent函数a！");
  console.log("调用回调函数");
  callback();
}

function b() {
  console.log("我是回调函数b");

}
function c() {
  console.log("我是回调函数c");

}

function test() {
  a(b);
  a(c);
}

test();