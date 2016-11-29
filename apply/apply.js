/**
 * Created by Rain on 2016/9/7.
 */
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
//fun.apply(thisArg[, argsArray])
//1.改变函数的 this 指向
function greet() {
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}

var j = {
  person: 'Douglas Crockford', role: 'Javascript Developer'
};

greet.apply(j, [1, 2]);//[1,2] 只是表示apply 是需要 数组


//2.js 的继承
function Product(name, price) {
  this.name = name;
  this.price = price;

  console.log(this.name + '  ' + this.price);

  if (price < 0) {
    throw RangeError(`Con not create product ${this.name} which a negative price`);
  }
}

function Food(name, price) {
  Product.apply(this, [name, price]);
  this.categore = 'food';
}

var f1 = new Food('name', 5);

//3. 调用匿名函数
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
  }).apply(animals[i], [i]); // 绑定当前的this 指向那个对象，[i] 是传入的参数
}