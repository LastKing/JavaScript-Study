/**
 * Created by toonew on 2015/12/22.
 */

//(function () {
//  console.log(this === global); // null => global
//})();


var foo = {
  bar: function () {
    console.log(this === foo);
  }
};

foo.bar(); // Reference, OK => foo
(foo.bar)(); // Reference, OK => foo

(foo.bar = foo.bar)(); // global?
(false || foo.bar)(); // global?
(foo.bar, foo.bar)(); // global?






