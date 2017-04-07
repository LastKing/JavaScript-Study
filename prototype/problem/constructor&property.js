/**
 * https://segmentfault.com/q/1010000008967773
 * 这个问题，prototype ，通过new 继承的问题
 * 解决方法 只需要 将   //1   移动到构造函数外面就行了，
 * 因为 如果在new的时候对prototype 赋值对象，就改变当前构造函数的原型对象，
 * 但是 你之前new的时候 已经对instance 的对象的隐式原型指向之前的原型对象。
 * 所以这两个原型 并不同一个原型对象，所以会出现方法找不到。
 * 实际的情况 ：instance.__proto__ = SubType.oldPrototype
 * 而你的希望 ：instance.__proto__ = new SuperType();
 * 所以这里出现了
 * Created by Rain on 2017/4/7.
 */
function SuperType() {
  this.property = true;
  SuperType.prototype.getSuperValue = function () {
    return this.property;
  }
}

function SubType() {
  this.prototype = false;
  SubType.prototype = new SuperType(); //1
}
SubType.prototype.old = 'oldPrototype'; //oldPrototype

var instance = new SubType();
console.log(instance.old);

var instance2 = new SubType();
console.log(instance2.getSuperValue());


/*
我的回答
 虽然 已经完结了，但是我还是想补上一份我的答案。

 题主的希望 ：instance.__proto__ = new SuperType(); 实际的情况 ：instance.__proto__ = SubType.oldPrototype;

 function SuperType() {
   this.property = true;
   SuperType.prototype.getSuperValue = function () {
    return this.property;
   }
 }

 function SubType() {
   this.prototype = false;
   SubType.prototype = new SuperType(); //1
 }
 SubType.prototype.old = 'oldPrototype'; //oldPrototype

 var instance = new SubType();
 console.log(instance.old);
 console.log(instance.getSuperValue());
 因为在new的时候

 var o = new Object();
 o.__proto__ = A.prototype; 绑定原型
 A.call(o); 绑定this, 并执行构造函数里面的代码
 把这个o返回给a;//完成var a = new A()的过程.由上面看出
 我们的原型在 构造函数内的函数运行时已经完成了绑定。

 这也是如果我们写在外面为什么会生效的原因。但是这里还需要注意一个问题：

 SubType.prototype = new SuperType();
 这句话 改变了原型的引用地址，如果在构造函数中写上这句话，就会造成instance的实例已经附上SubType.prototype，而不是这个new SuperType(); 此时intance不会因为你对Subtype.prototype而改变，因为instance.__proto__的引用的是oldPrototype的内存地址。

 如果你再加一段代码

 var instance2 = new SubType();
 console.log(instance2.getSuperValue());
 这个时候 你就可以输出，这个时候原型链就是正常的，因为已经改变过一次。！~！~

 重点就是：1. new做了什么，2. 对prototype的直接赋值对象会造成引用地址改变 3.instance.__proto__的引用地址不会跟着prototype的引用地址改变而改变
 */