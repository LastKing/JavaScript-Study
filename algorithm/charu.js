/**
 * Created by toonew on 2016/3/29.
 */

//插入 排序  记录
//第一 设定一个 一个确定排序的左侧，从右侧开始
//第二 用右侧 比较左侧，j 记录arr中的位置， 如果右侧小于左侧，则交换，j--
//第三 因为 左侧已经全部排序 完成 所以，j--就能记录位置，
//当右侧大于左侧的时候，跳出循环，将a[i]的值 赋值给数字
function charu1(arr) {
  var i, j;

  for (i = 1; i < arr.length; i++) {
    j = i;
    var target = arr[i];

    while (j > 0 && target < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--
    }
    arr[j] = target;
  }

  return arr;
}

function charu2(arr) {
  var i, j;

  for (i = 1; i < arr.length; i++) {
    var temp = arr[i];

    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = temp;

  }
  return arr;
}

function charu3(arr) {
  var temp, j;
  for (var i = 1; i < arr.length; i++) {
    temp = arr[i];
    j = i;
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}


var arr1 = [3, 2, 4, 9, 1, 5, 7, 6, 8];
console.log(charu1(arr1));

var arr2 = [3, 2, 4, 9, 1, 5, 7, 6, 8];
console.log(charu2(arr2));

/*  大量数 测试*/
var arr4 = [-11, 17, 12, 19, 0, -222];
for (var i = 0; i < 100000; i++) {
  arr4.push(Math.random());
}

var startTime = new Date();
console.log(charu2(arr4));
var endTime = new Date();
console.log('结束时间' + (endTime - startTime) + 'ms');