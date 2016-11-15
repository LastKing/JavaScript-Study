/**
 *  冒泡 排序 算法，就是每次将最大或者最小的的数字冒泡到最上面
 *  O(n2）
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

function bubbleSort2(arr) {
  var i = arr.length, j;

  var temp, flag = true;
  while (i > 0 && flag) {
    flag = false;
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    i--;
  }
  return arr;
}

/* for 循环版本   */
function bubbleSort3(arr) {
  var flag = false;

  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        flag = true;
      }
    }
    if (flag == false) {
      return arr;
    }
  }
  return arr;
}

var arr1 = [2, 3, 4, 9, 1, 5, 7, 6, 8];
var arrSorted = bubbleSort(arr1);
console.log(arrSorted);

var arr2 = [2, 3, 4, 9, 1, 5, 7, 6, 8];
var arrSorted2 = bubbleSort2(arr2);
console.log(arrSorted2);

var arr3 = [2, 3, 4, 9, 1, 5, 7, 6, 8];
var arrSorted3 = bubbleSort3(arr3);
console.log(arrSorted3);


var arr4 = [-11, 17, 12, 19, 0, -222];
for (var i = 0; i < 100000; i++) {
  arr4.push(Math.random());
}

var startTime = new Date();
console.log(bubbleSort3(arr4));
var endTime = new Date();
console.log('结束时间' + (endTime - startTime) + 'ms');