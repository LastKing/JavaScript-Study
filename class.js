/**
 * https://segmentfault.com/q/1010000008694340
 * Created by toonew on 2017/3/14.
 */
//普通function版本
function Person(name, birth) {
  this.name = name;
  this.birth = birth;

  Object.defineProperty(this, "birth", {
    set: function (birth) {
      this.age = new Date().getFullYear() - birth;
      return birth;
    }
  });
}
Person.prototype.say = function () {
  console.log(`${this.name}:Hello`);
};

var randy = new Person('Randy', 1995);
console.log(randy); // => {name: "Randy", birth: 1995}
randy.say('Hello');// => 'Randy: Hello'
console.log(randy.age); // => 22
randy.birth = 1998;
console.log(randy.age); // => 19


//es6 class版本
class Person2 {
  constructor(name, birth) {
    this.name = name;
    this.birth = birth;
  }

  set birth(birth) {
    this.age = new Date().getFullYear() - birth;
    return birth;
  }

  say() {
    console.log(`${this.name}:Hello`);
  }
}


var randy2 = new Person2('Randy', 1995);

console.log(randy2); // => {name: "Randy", birth: 1995}

randy2.say('Hello'); // => 'Randy: Hello'

console.log(randy2.age); // => 22

randy2.birth = 1998;

console.log(randy2.age); // => 19









