function Foo() {
  Foo.abc = function () {
    console.log('456');
  };
  this.def = this.abc;
  this.abc = function () {
    console.log('def');
  };

  abc = function () {
    console.log('@@@@@@');
  };
  var abc = function () {
    console.log('$$$$$$$$');
  };
}

Foo.abc = function () {
  console.log('123');
};

Foo.prototype = {
  abc: function () {
    console.log('abc');
  }
};

Foo.abc();          //123
var f = new Foo();
f.def();            //def
f.abc();            //abc
Foo.abc();          //456
console.log(Foo["abc"]);
