/**
 * Created by Rain on 2016/9/7.
 */
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call

//fun.call(thisArg[, arg1[, arg2[, ...]]]) 语法

//1.使用call方法调用函数并且指定上下文的'this'
function greet() {
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}

var j = {
  person: 'Douglas Crockford', role: 'Javascript Developer'
};

greet.call(j, 1, 2, 3);

//2. 使用call方法调用匿名函数
var animals = [
  {species: 'Lion', name: 'King'},
  {species: 'Whale', name: 'Fail'}
];

for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log(`# ${i}  ${this.species}: this.name`);
    };
    this.print();
  }).call(animals[i], i)
}

//3.js 中的继承
function Product(name, price) {
  this.name = name;
  this.price = price;

  console.log(this.name + '  ' + this.price);

  if (price < 0) {
    throw RangeError(`Con not create product ${this.name} which a negative price`);
  }
}


function Food(name, price) {
  Product.call(this, name, price);
  this.categore = 'food';
}

//等同于
// function Food(name, price) {
//   this.name = name;
//   this.price = price;
//   if (price < 0) {
//     throw RangeError('Cannot create product ' +
//         this.name + ' with a negative price');
//   }
//
//   this.category = 'food';
// }

function Toy(name, price) {
  Product.call(this, name, price);
  this.categore = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);