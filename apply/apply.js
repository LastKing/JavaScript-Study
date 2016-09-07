/**
 * Created by Rain on 2016/9/7.
 */
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

//调用匿名函数
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
  }).apply(animals[i], [i])
}

//改变函数的上下文
function greet() {
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}

var j = {
  person: 'Douglas Crockford', role: 'Javascript Developer'
};

greet.apply(j);

/////////////
x = 9;

var test = {
  x: 81,
  getX: function () {
    return this.x
  }
};
console.log(test.getX());
var test2 = test.getX;
console.log(test2());
console.log(test2.bind(test)());