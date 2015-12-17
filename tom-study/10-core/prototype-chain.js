/**
 * Created by toonew on 2015/12/18.
 */

var a = {
  x: 10,
  calculate: function (z) {
    return this.x + this.y + z;
  }
};

var b = {
  y: 20,
  __proto__: a
};

var c = {
  y: 30,
  __proto__: a
};

b.calculate(30);
c.calculate(40);
