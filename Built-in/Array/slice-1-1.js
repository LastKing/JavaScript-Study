/**
 * Created by Rain on 2015/12/23.
 */

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mongo"];
var citrus = fruits.slice(1, 3);

console.log(citrus);

// 使用slice方法从myCar中创建一个newCar.
var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}};
var myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
var newCar = myCar.slice(0, 2);

console.log("myCar = " + myCar);
console.log("newCar = " + newCar);
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);

// 改变myHonda对象的color属性.
myHonda.color = "purple";
console.log("The new color of my Honda is " + myHonda.color);

//输出myCar, newCar中各自的myHonda对象引用的color属性.
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);

