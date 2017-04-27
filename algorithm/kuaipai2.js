/**
 * Created by toonew on 2017/3/15.
 */

/*
 [77, -33, 22, 32, 0, 2, 11]

 [-33,0,2,11]               22       [77,32]
 [-33,0]     2   [11]        22     [] 32 [77]
 [-33] 0 []   2   [11]        22     [32,77]
 [-33 ,0]     2   [11]        22     [32,77]
 [-33,0,2,11]                 22     [32,77]
 [-33,0,2,11,22,32,77]
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var mIndex = Math.floor(arr.length / 2);
  var mNumber = arr.splice(mIndex, 1)[0];
  var arrL = [];
  var arrR = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > mNumber) {
      arrR.push(arr[i]);
    } else {
      arrL.push(arr[i]);
    }
  }

  return quickSort(arrL).concat(mNumber, arrR);
}


var arr = [77, -33, 22, 32, 0, 2, 11];
console.log(quickSort(arr));




