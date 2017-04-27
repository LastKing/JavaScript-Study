/**
 * Created by Rain on 2017/3/7.
 */
function xuanze(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(parseInt(Math.random() * 100));
}
console.log(xuanze(arr));
console.log(xuanze([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(xuanze([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));