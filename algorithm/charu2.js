/**
 * Created by Rain on 2017/3/7.
 */
function charu(arr) {
  var duibi = 0, change = 0;

  for (var i = 1; i < arr.length; i++) {
    var key = arr[i];
    var j = i - 1;

    while (j >= 0 && arr[j] > key) {
      change++;
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  console.log(`交换 ：${change}`);
  return arr;
}

var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(parseInt(Math.random() * 100));
}
console.log(charu(arr));

console.log("最坏的情况", charu([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

console.log("最好的情况", charu([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
