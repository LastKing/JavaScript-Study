/**
 * Created by toonew on 2017/3/15.
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var mNumberIndex = Math.floor(arr.length / 2);
  var mNum = arr.splice([mNumberIndex], 1)[0];
  var left = [];
  var right = [];

  console.log(mNum);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mNum) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mNum, quickSort(right));
}


var arr = [77, -33, 22, 32, 0, 2, 11];
console.log(quickSort(arr));