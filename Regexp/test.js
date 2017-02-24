/**
 * Created by Rain on 2016/12/2.
 */
var reg = /(\w+)\s(\w+)/;

var str = "John Smith";

var newStr = str.replace(reg, "$2 $1");
console.log(newStr);
