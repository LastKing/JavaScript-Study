function Person(name) {
  Object.defineProperty(this, 'name', {value: name, enumerable: true});
}

Object.defineProperty(Person, 'ARMS_NUM', {value: 2, enumerable: true});
Object.seal(Person.prototype);
Object.seal(Person);

function Student(name, className) {
  this.className = className;
  Person.call(this, name);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype = constructor = Student;

var s1 = new Student('name', 'className');
console.log(s1.className);
console.log(s1.name);
console.log(s1);