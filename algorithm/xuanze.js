/**
 * 选择排序实现
 * 设定最小值，并不是在每一次都交换，而是记录下这个值，等到一次循环完毕，将最小值 记录到最后
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

function xuanze2(arr) {
  var min, temp;
  for (var i = 0; i < arr.length; i++) {
    min = i;

    for (var j = 0; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
var result = xuanze(arr);
console.log(result);

var arr2 = [3, 2, 4, 9, 1, 5, 7, 6, 8];
var result2 = xuanze2(arr2);
console.log(result2);


/*  大量数 测试*/
var arr4 = [-11, 17, 12, 19, 0, -222];
for (var i = 0; i < 100000; i++) {
  arr4.push(Math.random());
}

var startTime = new Date();
console.log(xuanze2(arr4));
var endTime = new Date();
console.log('结束时间' + (endTime - startTime) + 'ms');