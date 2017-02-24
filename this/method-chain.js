/**
 * Created by toonew on 2016/3/18.
 */
//https://segmentfault.com/a/1190000004328581

function fn() {
  console.log(this.a);
}

var obj3 = {
  a: 3,
  fn: fn
};

var obj2 = {
  a: 2,
  obj3: obj3
};

var obj = {
  a: 1,
  obj2: obj2
};


obj.obj2.obj3.fn(); //3
















