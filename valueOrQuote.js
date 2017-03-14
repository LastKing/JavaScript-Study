/**
 * https://segmentfault.com/q/1010000006096248
 * Created by Rain on 2017/3/14.
 */
function add(obj) {
  obj.a = 's';
  obj = new Object();
  obj.b = 'x';
}

var objX = {
  b: 'b'
};

add(objX);

console.log(objX);


/*
个人对这段代码的理解，js 都是值的传递，没有引用传递这回事，对象传的也是对象的地址，
所以add 函数中   obj 和  objX   两个变量都指向了 {b:'b'} 这个变量。
若果是单纯的修改，确实没有问题，两者都是可以的，
但是 如果 你修改了obj的引用地址  这就GG了，以后的修改了，就和  objX 无缘了,
因为 obj 指向了新的对象地址。
 */
