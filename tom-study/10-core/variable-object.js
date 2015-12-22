/**
 * Created by toonew on 2015/12/19.
 */
var foo=10;

function bar (){};

(function baz(){});

console.log(this.foo==foo);
console.log(window.bar==bar);

console.log(baz);
