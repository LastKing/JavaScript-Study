/**
 * Created by toonew on 2015/12/16.
 */
Object.prototype.bar = 1;

var foo = {goo: undefined};

foo.bar = 1;
console.log('bar' in foo);

console.log(foo.hasOwnProperty('bar'));
console.log(foo.hasOwnProperty('goo'));


