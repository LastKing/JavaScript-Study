/**
 * Created by Rain on 2017/3/16.
 */
function mergeSort(arr, low, high) {
  //这里用来返回最低  粒度的数组 ，单个 单个的数字，结束递归，开始回收
  if (low > high) {
    return [];
  } else if (low == high) {
    return [arr[low]];
  }

  //开始递归分解/结合，不断的分解和  结合
  var mIndex = Math.floor((low + high) / 2);
  var arrL = mergeSort(arr, low, mIndex);
  var arrR = mergeSort(arr, mIndex + 1, high);

  var resultArr = [];

  //一层层的根据  左右数组 对比 合并，对比 合并
  while (arrL.length > 0 || arrR.length > 0) {
    if (arrL[0] < arrR[0]) {
      resultArr.push(arrL.shift());
    } else {
      resultArr.push(arrR.shift());
    }

    if (arrL.length == 0) {
      resultArr = resultArr.concat(arrR);
      break;
    } else if (arrR.length == 0) {
      resultArr = resultArr.concat(arrL);
      break;
    }
  }

  return resultArr;
}


var arr = [77, -33, 22, 32, 0, 2, 11];
console.log(mergeSort(arr, 0, arr.length - 1));

/*

 [77,-33,22,32,0,2,11];
 [77 ,-33,22]                  [32,0,2,11]
 [77]   [-33,22]             [33,0]        [2,11]
 [77][]  [-33],[22]          [33],[0]      [2],[11]
 开始合并
 [77]    [-33,22]            [0,33]        [11,2]
 [-33,22,77]                 [0,2,11,33]
 [-33,0,2,11,22,33,77]
 */