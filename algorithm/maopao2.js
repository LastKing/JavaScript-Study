/**
 * Created by Rain on 2017/3/7.
 */
function maopao(arr) {
  var flag = false;
  var duibi = 0, change = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      duibi++;
      if (arr[i] > arr[j]) {
        change++;
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(`对比 ${duibi}  交换${change}`);
  return arr;
}

var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(parseInt(Math.random() * 100));
}
console.log(maopao(arr));
console.log(maopao([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(maopao([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));