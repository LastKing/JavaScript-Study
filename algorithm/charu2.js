/**
 * Created by Rain on 2017/3/7.
 */
function charu(arr) {
  for (var i = 1; i < arr.length; i++) {

    for (var j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      var temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
  return arr;
}

var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(parseInt(Math.random() * 100));
}
console.log(charu(arr));

console.log("最坏的情况", charu([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

console.log("最好的情况", charu([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
