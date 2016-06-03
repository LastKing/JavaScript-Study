function test() {
  console.log(arguments);
  console.log(Array.prototype.slice.call(arguments));
  var a = ['test', 'test'];
  console.log(a);
}

test('test', 'test');

