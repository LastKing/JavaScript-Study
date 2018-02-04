/**
 * Created by Rain on 2015/12/7.
 */
//1.日期（字符串格式）
//2.时间戳（从1970开始计算）

//获得时间（1、时间戳  2、DateString   3、分割每一个具体的月份）
console.log(new Date());
console.log(new Date(20000));
console.log(new Date('1970-01-01T00:00:00'));
// console.log(new Date('1970-01-01 00:00:00'));
// console.log(new Date('December 17,1995 03:24:00'));
console.log(new Date(1970, 1, 1, 0, 0, 10));

//获得时间戳
console.log(Date.now());//方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。
console.log(Date.parse('1970-01-01T00:01:10'));//方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。(es5以前不推荐）
console.log(Date.UTC(1970, 0, 1, 0, 1, 10));//方法接受的参数同日期构造函数接受最多参数时一样，返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数。
//parse和 utc 两个 需要注意，各市字符串必须+ T，utc 必须月份减一
console.log(new Date().getTime());
console.log(new Date().valueOf());

function getDate(str) {
  str = str.replace(/-/g, "/");
  return new Date(str);
}

var str = '2015-12-7 13:36:59';
var date = getDate(str);
console.log(date);

function getStamp(str) {
  str = str2.replace(/[ :]/g, '-').split('-');
  return Date.UTC(str[0], str[1], str[2], str[3], str[4], str[5]);
}

var str2 = '2015-12-7 13:36:59';
var date2 = getStamp(str2);
console.log(date2);
console.log(new Date(date2));

//
// // // 也很简单
// var strtime = '2014-04-23 18:55:49:123';
// var date = new Date(strtime); //传入一个时间格式，如果不传入就是获取现在的时间了，这样做不兼容火狐。
// // 可以这样做
// var arr = strtime.replace(/ |:/g, '-').split('-');
// date = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5], arr[6]));
//
// // 有三种方式获取，在后面会讲到三种方式的区别
// time1 = date.getTime();//获得时间戳
// time2 = date.valueOf();
// time3 = Date.parse(date);
// console.log(get1(time1), get1(time2), get1(time3));