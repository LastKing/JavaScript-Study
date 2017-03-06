var test = {
  _Name: null,
  _Age: 0,

//_Name的读写
  set name(name) {
    this._Name = name
  },
  get name() {
    return this._Name;
  },

//_Age的读写
  set age(age) {
    this._Age = age
  },
  get age() {
    return this._Age
  }
};

console.log(test.name + " " + test.age);//null 0
test.name = 'lucy';
test.age = 20;
console.log(test.name + " " + test.age);
