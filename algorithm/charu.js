/**
 * Created by toonew on 2016/3/29.
 */

function charu(arr) {
  var i, j;
  var n = arr.length;

  for (i = 1; i < n; i++) {
    j = i;
    var target = arr[i];

    while (j > 0 && target < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = target;
  }
  return arr;
}


var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
var arrSorted = charu(arr);
console.log(arrSorted);
