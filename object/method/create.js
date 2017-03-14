/**
 * mdn
 * writable:是否可任意写
 * configurable：是否能够删除，是否能够被修改
 * enumerable：是否能用 for in 枚举
 * value：值
 * Created by toonew on 2017/3/14.
 */
//1.根据null  创建新对象
var o = Object.create(null);

console.log(o);


//2.根据Object.prototype创建对象，
//  并增加foo 可写，可配置，value
//  并增加bar 不可配置，get，set方法
var o2 = Object.create(Object.prototype, {
  foo: {
    writable: true,
    configurable: true,
    // enumerable: true,
    value: "hello"
  },
  bar: {
    configurable: false,
    get: function () {
      return 10
    },
    set: function (value) {
      console.log("Setting `o.bar` to", value)
    }
  }
});

console.log(o2.foo);  //hello
o2.foo = 'hello2';
console.log(o2.foo);  //可修改
console.log(o2.bar);  //10
o2.bar = 2;           //Setting `o.bar` to 2
for (let i in o2) {
  console.log(i);     //无输出  因为  上面的两个属性都是  不可枚举的
}


//3. 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, {p: {value: 42}});

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24;
console.log(o.p);
//42

o.q = 12;
for (var prop in o) {
  console.log(prop)
}
//"q"

delete o.p;
//false


//4. 创建一个可写的,可枚举的,可配置的属性p
o2 = Object.create({}, {
  p: {value: 42, writable: true, enumerable: true, configurable: true}
});

