/**
 * Created by Rain on 2016/11/12.
 */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x},${this.y})`
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);//调用父类的 constructor (x,y);   //必须要 super
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}

let cp = new ColorPoint(25, 8, 'green');
console.log(cp instanceof ColorPoint);
console.log(cp instanceof Point);

class A {
}
class B extends A {
}

console.log(B.__proto__ === A);
console.log(B.prototype.__proto__ === A.prototype);
