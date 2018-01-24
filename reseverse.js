/**
 * 问题出处：
 * https://zhuanlan.zhihu.com/p/33161743?iam=c4edee0375c1485ebf5c5be0532ba514&utm_source=qq&utm_medium=social
 * 但是他这个解释貌似很牵强，或者我没理解
 *
 * Created by Rain on 2018/1/24
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//无法查看 v8中对这个方法的具体实现 只能看看mdn的polyfill
Array.prototype.map = function (callback, thisArg) {
  var T, A, k;

  if (this == null)
    throw new TypeError(" this is null or not defined");

  // 1. 将O赋值为调用map方法的数组.
  var O = Object(this);

  // 2.将len赋值为数组O的长度.
  var len = O.length >>> 0;

  // 3.如果callback不是函数,则抛出TypeError异常.
  if (Object.prototype.toString.call(callback) !== "[object Function]")
    throw new TypeError(callback + " is not a function");

  // 4. 如果参数thisArg有值,则将T赋值为thisArg;否则T为undefined.
  if (thisArg)
    T = thisArg;

  // 5. 创建新数组A,长度为原数组O长度len
  A = new Array(len);

  // 6. 将k赋值为0
  k = 0;

  // 7. 当 k < len 时,执行循环.
  while (k < len) {
    var kValue, mappedValue;

    //遍历O,k为原数组索引
    if (k in O) {

      //kValue为索引k对应的值.
      kValue = O[k];

      // 执行callback,this指向T,参数有三个.分别是kValue:值,k:索引,O:原数组.
      mappedValue = callback.call(T, kValue, k, O);

      // 返回值添加到新数组A中.
      A[k] = mappedValue;
    }
    // k自增1
    k++;
  }

  // 8. 返回新数组A
  return A;
};

/**
 * 题目解析，只是从垫片分析这个问题
 *  第一map方法，有两个参数
 *    callback
 *    thisArg  以后实际会调用参数，否则为null或者undefined，即指向全局
 *  第二
 *    理解点[...a]  这里就是个简单的深拷贝。。。。。不然传入的是一个"内存地址"
 *
 *  实际不好分析的原因，看不到源码，只能看看垫片，相信内部应该类似
 *      callback.call(T, kValue, k, O);
 *  反复用[...a]这个新的数组 提取最后一个 。。。
 *  这个程序妈的。。全是炫技。。我日你哥。。绕的爆裂。。。
 */

function reverse(a) {
  return a.map(a.pop, [...a]);
}

function reverse1(a) {
  return a.map(function () {
    return a.pop();
  }, [...a]);
}

console.log(reverse(arr));

console.log(reverse1(arr1));
console.log(arr1);
