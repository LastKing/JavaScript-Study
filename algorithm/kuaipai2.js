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

  var mNumberIndex = Math.floor(arr.length / 2);
  var mNumber = arr.splice([mNumberIndex], 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (mNumber > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mNumber, quickSort(right));
}


var arr = [77, -33, 22, 32, 0, 2, 11];
console.log(quickSort(arr));




