function Test() {
  console.log(arguments);
  console.log(Array.prototype.slice.call(arguments));
}

Test('test1', 'test2');

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
console.log(citrus);

var test1 = {'0': 'test1', '1': 'test2', length: 2};//这种带数字类数组形式
console.log(Array.prototype.slice.call(test1));



