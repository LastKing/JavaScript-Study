/**
 * 选择排序实现
 *  设定最小值，并不是在每一次都交换，而是记录下这个值，等到一次循环完毕，将最小值 记录到最后
 *
 * Created by toonew on 2016/3/29.
 */

function xuanze(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i];
    var index = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    temp = arr[i];
    arr[i] = min;
    arr[index] = temp;
  }

  return arr;
}


var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
var arr2 = xuanze(arr);
console.log(arr2);