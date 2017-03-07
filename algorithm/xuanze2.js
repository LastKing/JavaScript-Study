/**
 * Created by Rain on 2017/3/7.
 */
function xuanze(arr) {
  var duibi1 = 0, change2 = 0;
  for (var i = 0; i < arr.length; i++) {
    var min = i;

    for (var j = i + 1; j < arr.length; j++) {
      duibi1++;
      if (arr[min] > arr[j]) {
        change2++;
        min = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  console.log(`对比： ${duibi1}   交换 ${change2}`);
  return arr;
}

var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(parseInt(Math.random() * 100));
}
console.log(xuanze(arr));
console.log(xuanze([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(xuanze([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));