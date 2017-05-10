/**
 * apply 使用场景分析
 * 1.绑定this
 * 2.继承  （这很容易忘记）
 * 3.将数组参数 与  不定参数的方法的组合使用
 *    比如 Math.max(arg1,arg2,....)   传入 [1,2,3]数组参数
 * Created by Rain on 2017/5/10.
 */
//1.类数组的转换
function likeArray() {
  var arr = Array.prototype.slice.apply(arguments);
  console.log(arr);
}

likeArray(1, 2, 3, 4);

//2.数组之间的追加
var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];

console.log(Array.prototype.push.apply(array1, array2));
console.log(array1);

//3.获取数组中的最大值
var numbers = [5, 458, 120, -215];
Math.max.apply(Math, numbers);     //这些实践 都是因为  这些方法接受的都是（1,2,3,..）这样的参数，apply可以数组

//4.验证是否是数组（前提是toString方法没有被重写）
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

//5.类数组对象求和
function sum() {
  var sum = Array.prototype.reduce.call(arguments, [function (total, pre) {
    return total +pre;
  }]);
  console.log(sum);
}
sum(1, 2, 3);
