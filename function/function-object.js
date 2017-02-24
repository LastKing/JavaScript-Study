/**
 * Created by Rain on 2015/12/14.
 */

//function声明的变量和function有可能只在该function内部
function Fc() {
  var test = 'fc';
  this.test2 = 'fc';

  return Fc = function () {
    var test3 = 'test3-var';
    this.test4 = 'test4-this';
    console.log('fc - function');
  }
}

var fc1 = new Fc();
console.log(new fc1().test);  //undefined   fc - function
console.log(new fc1().test2); //undefined   fc - function  （以上两种因为构造函数 默认返回的是this，但是如果有对象的话就已返回为准
console.log(new fc1().test3); //undefined   fc - function
console.log(new fc1().test4); //test4-this  fc - function   (以上两种test3为私有的）
console.log(fc1());

var obj = {
  oj: 'oj',
  objfc: function () {
    console.log('fc')
  }
};

console.log(obj.oj);
console.log(obj.objfc());
