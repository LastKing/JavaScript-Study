/**
 * setTimeout 模拟setInterval
 * 实现对 延迟时间的动态 改变，因为setInterval 是不允许改变delayTime的
 * https://segmentfault.com/q/1010000008953633?_ea=1785660
 * 递归的一种应用。。多了一种思考
 * Created by Rain on 2017/4/7.
 */

function test(i) {
  setTimeout(function () {
    console.log(`test1--` + i + new Date());
    i++;
    test(i);
  }, i * 1000);
}

test(1);

//ie9以上
function test2(i) {
  console.log(`test2--` + i + new Date());
  i++;

  setTimeout(test2, i * 1000, i);
}
test2(1);