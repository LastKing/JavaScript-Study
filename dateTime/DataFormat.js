/**
 * Created by Rain on 2015/12/7.
 */

var str = '2015-12-7 13:36:59';
str = str.replace(/-/g, "/");
var date = new Date(str);

console.log(date);

