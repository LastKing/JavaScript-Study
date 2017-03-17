/**
 * Created by Rain on 2017/3/7.
 */
//这个对冒泡的  理解是错误的，虽然能出 结果，但是这个并不是冒泡
//因为冒泡是每次 选出最大的，不断向上的，这个是固定一个，跟后面所有的 数据对比
//所以 这样是确定固定位置的数据
function maopaoError(arr) {
  var flag = false;
  var duibi = 0, change = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      duibi++;
      if (arr[i] > arr[j]) {
        change++;
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(`对比 ${duibi}  交换${change}`);
  return arr;
}

function maopao(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(parseInt(Math.random() * 100));
}
console.log(maopao(arr));
console.log(maopao([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(maopao([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));