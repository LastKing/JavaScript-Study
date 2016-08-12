/**
 * Created by Rain on 2016/8/12.
 */
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }
  console.log(sum);
}

add(2, 3, 5);

// arguments变量的写法
function sortNumbers1() {
  return Array.prototype.slice.call(arguments).sort();
}
// rest参数的写法
const sortNumbers2 = (...numbers) => numbers.sort();

console.log(sortNumbers1(2, 1, 6, 3, 3, 6, 7, 8, 9, 0));
console.log(sortNumbers2(2, 1, 6, 3, 3, 6, 7, 8, 9, 0));
