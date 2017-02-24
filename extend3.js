/**
 * Created by Rain on 2017/2/24.
 */
function Animal() {
  this.name = "Animal";
  this.showName = function () {
    console.log(this.name);
  }
}

function Cat() {
  this.name = "Cat";
}

var animal = new Animal();
var cat = new Cat();

//通过call或apply方法，将原本属于Animal对象的showName()方法交给对象cat来使用了。
//输入结果为"Cat"
animal.showName.call(cat, ",");
animal.showName.apply(cat,[]);

// function Animal(name) {
//   this.name = name;
//   this.showName = function () {
//     console.log(this.name);
//   }
// }
//
// function Cat(name) {
//   Animal.call(this, name);
// }
//
// var cat = new Cat("Black Cat");
// cat.showName();