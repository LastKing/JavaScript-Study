/**
 * http://blog.csdn.net/morewindows/article/details/6684558
 * https://segmentfault.com/a/1190000005144961
 * Created by Rain on 2016/11/15.
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var mNumIndex = Math.floor(arr.length / 2);//取基准值的下标
  var mNum = arr.splice([mNumIndex], 1)[0];  //取基准值
  var left = [];  //左边数组
  var right = []; //右边数组

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mNum) { //小于基准值，放在左边数组
      left.push(arr[i]);
    } else {            //大于基准值，放在右边数组
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([mNum], quickSort(right));//
}

var arr = [77, -33, 22, 32, 0, 2, 11];
console.log(quickSort(arr));


/*  大量数 测试  10W*/
var arr4 = [-11, 17, 12, 19, 0, -222];
for (var i = 0; i < 100000; i++) {
  arr4.push(Math.random());
}

var startTime = new Date();
console.log(quickSort(arr4));
var endTime = new Date();
console.log('结束时间' + (endTime - startTime) + 'ms');