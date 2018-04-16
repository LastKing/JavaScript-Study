/**
 * generator 会导致函数暂停 只有在next才会执行
 * Created by Rain on 2018/4/16
 */
//单纯的暂停函数
function* f() {
  console.log('执行了');
}

var generator = f();

setTimeout(function () {
  generator.next();
}, 2000);



