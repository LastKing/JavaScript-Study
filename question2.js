/**
 * Created by Rain on 2017/3/9.
 */
var str = "key1.key2.key3";

var obj = {};
//转化成 obj={key1:key2:key3:{}}}};
var arr = str.split('.');

function add(arr, obj) {
  arr.forEach(function (result, index) {
    obj[result] = {};
    obj = obj[result];
  });
  return obj;
}

var test = add(arr, obj);
console.log(test);
//没想明白。。