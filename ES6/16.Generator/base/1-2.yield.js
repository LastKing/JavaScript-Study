/**
 * 遇到yield 就暂停，并且执行之前所有的操作
 * Created by Rain on 2017/5/8.
 */
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function*(arr) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (typeof item !== 'number') {
      yield* flat(arr[i]);
    }else{
      yield item;
    }

  }
};

for (var f of flat(arr)) {
  console.log(f);
}
