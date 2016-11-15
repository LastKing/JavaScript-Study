/**
 *
 * https://segmentfault.com/a/1190000005144961#articleHeader6
 * Created by Rain on 2016/11/15.
 */
function mergeSort(arr, s, e) {
  if (s > e) {   //起始位置大于终点位置，返回空数组
    return [];
  } else if (s == e) {
    return [arr[s]]; //起始位置等于终点位置，说明数组里只有一个数字，返回只含一个数字的数组
  }

  var mIndex = Math.floor((s + e) / 2);
  var arrL = mergeSort(arr, s, mIndex);
  var arrR = mergeSort(arr, mIndex + 1, e);

  var resultArr = [];//结果数组

  while (arrL.length > 0 || arr.length > 0) {
    if (arrL[0] < arrR[0]) {
      resultArr.push(arrL.shift());
    } else {
      resultArr.push(arrR.shift());
    }

    if (arrL.length == 0) {  //当左边的数组为空时
      resultArr = resultArr.concat(arrR);
      break;
    } else if (arrR.length == 0) {
      resultArr = resultArr.concat(arrL);
      break;
    }
  }
  return resultArr;
}

/*  大量数 测试  10W*/
var arr = [-11, 17, 12, 19, 0, -222];
for (var i = 0; i < 100000; i++) {
  arr.push(Math.random());
}

var startTime = new Date();
console.log(mergeSort(arr, 0, arr.length - 1));
var endTime = new Date();
console.log('结束时间' + (endTime - startTime) + 'ms');