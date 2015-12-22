/**
 * Created by toonew on 2015/12/22.
 */

function foo() {
  console.log(this);
}

foo();

console.log(foo === foo.prototype.constructor);

foo.prototype.constructor(); // foo.prototype