/**
 * Created by Rain on 2017/3/16.
 */
function mergeSort(arr, low, high) {
  if (low > high) {
    return [];
  } else if (low === high) {
    return [arr[low]];
  }

  var mIndex = Math.floor((high + low) / 2);
  var arrR = mergeSort(arr, low, mIndex);
  var arrL = mergeSort(arr, mIndex + 1, high);

  var result = [];
  while (arrR.length > 0 && arrL.length > 0) {

    if (arrR[0] < arrL[0]) {
      result.push(arrR.shift())
    } else {
      result.push(arrL.shift())
    }

    if (arrR.length === 0) {
      result = result.concat(arrL);
    } else if (arrL.length === 0) {
      result = result.concat(arrR);
    }
  }

  return result;
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