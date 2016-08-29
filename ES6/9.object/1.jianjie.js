/**
 * Created by Rain on 2016/8/29.
 */
//属性的简洁化表示
var foo = 'bar';
var baz = {foo};
//等同于
var baz2 = {foo: foo};


var o = {
  method(){
    return 'hello';
  }
};
//等同于
var o2 = {
  method: function () {
    return 'Hello!';
  }
};

var bir = '2000/01/01';
var Person = {
  name: '张三',
  bir,
  hello(){
    console.log('我的名字是', this.name);
  }
};




