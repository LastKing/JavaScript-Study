/**
 * https://segmentfault.com/q/1010000008851665
 * 就是普通 链式的  +个  ... rest参数
 * Created by toonew on 2017/4/5.
 */
function add(...values) {
  let sum = 0;
  for (key of values) {
    sum += key;
  }

  let temp = (x) => {
    sum += x;
    return temp;
  };

  temp.toString = () => sum;
  return temp;
}

console.log(add(1)(2));  // 3
console.log(add(1, 2, 3)(10)); // 16
console.log(add(1)(2)(3)(4)(5)); // 15
