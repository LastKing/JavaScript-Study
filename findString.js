/**
 * 实现 是实现了，但是貌似 obj 并不保证输出顺序把，根据运行的环境而言
 * https://segmentfault.com/q/1010000008703575
 * Created by toonew on 2017/3/15.
 */
function leastTime(str) {
  //定义一个对象，把对应字母存储到属性中，若属性已存在，则增加数量
  var obj = {};
  var arr = [];
  //取个超大的数作为lestTimes初始值，如果需要你可以改成无限大
  var lestTimes = 1000000;
  //在这个for循环中完成字母次数统计
  for (var i = 0; i < str.length; i++) {
    let key = str[i];
    if (obj.hasOwnProperty(key)) {
      //若存在，对应属性加1
      obj[key]++;
    } else {
      //不存在则增加对应属性，并且设置出现次数为1
      obj[key] = 1;
      arr.push(key);
    }
  }

  for (var k in obj) {
    if (obj[k] < lestTimes) {
      lestTimes = obj[k];
    }
  }

  for (var j = 0; j < arr.length; j++) {
    let key = arr[j];
    if (obj[key] === lestTimes) {
      return key;
    }
  }
}
var str = 'cbaacffddeaebb';
console.log(leastTime(str));