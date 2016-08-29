/**
 * Created by Rain on 2015/12/7.
 */

var str = '2015-12-7 13:36:59';
str = str.replace(/-/g, "/");
var date = new Date(str);

console.log(date);

// var str2 = '2015-12-7 13:36:59';
// str = str2.replace(/ |:/g, '-').split('-');
// console.log(str);
// var time = Date.UTC(str[0], str[1], str[2], str[3], str[4], str[5])
// console.log(time);
// console.log(new Date(time));

// 也很简单
var strtime = '2014-04-23 18:55:49:123';
var date = new Date(strtime); //传入一个时间格式，如果不传入就是获取现在的时间了，这样做不兼容火狐。
// 可以这样做
var arr = strtime.replace(/ |:/g, '-').split('-');
date = new Date(Date.UTC(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5], arr[6]));

// 有三种方式获取，在后面会讲到三种方式的区别
time1 = date.getTime();
time2 = date.valueOf();
time3 = Date.parse(date);
console.log(get1(time1), get1(time2), get1(time3));


function get1() {
  return new Date(time1);
}
