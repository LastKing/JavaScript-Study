/**
 * Created by toonew on 2016/3/29.
 */


//插入 排序  记录
//第一 设定一个 一个确定排序的左侧，从右侧开始
//第二 用右侧 比较左侧，j 记录arr中的位置， 如果右侧小于左侧，则交换，j--
//第三 因为 左侧已经全部排序 完成 所以，j--就能记录位置，
//       当右侧大于左侧的时候，跳出循环，将a[i]的值 赋值给数字
function charu(arr) {
  var i, j;

  for (i = 1; i < arr.length; i++) {
    j = i;
    var target = arr[i];

    while (j > 0 &&  target< arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--
    }
    arr[j] = target;
  }

  return arr;
}

var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
var arrSorted = charu(arr);
console.log(arrSorted);
