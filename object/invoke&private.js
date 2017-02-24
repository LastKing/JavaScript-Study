/**
 * Created by Rain on 2015/12/10.
 */
var book = {
  name: 'test',
  "main tilte": "Javascript"
};
console.log(book.name);
//console.log(book.main tile);
console.log(book["main tilte"]);//对象的方法或者属性[]调用方式


//私有变量
var test = function () {
  var ee = 'test';
};

var t = new test();
console.log(t.ee);