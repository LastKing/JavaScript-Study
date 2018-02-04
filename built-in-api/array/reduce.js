/**
 * Created by toonew on 2016/9/8.
 */
var sum = [0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
  console.log(`${previousValue}    ：   ${currentValue}`);
  return previousValue + currentValue;
});

console.log(sum);

var array = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
  return a.concat(b);
});

console.log(array);
