/**
 *  冒泡 排序 算法，就是每次将最大或者最小的的数字冒泡到最上面
 * Created by toonew on 2016/3/29.
 */

function bubbleSort(arr) {
  var i = arr.length, j;

  var tempExchangeVal;
  while (i > 0) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        tempExchangeVal = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempExchangeVal;
      }
    }
    i--;
  }
  return arr;
}

var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
var arrSorted = bubbleSort(arr);
console.log(arrSorted);

















