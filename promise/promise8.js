//每次返回都重新创建了promise对象
var aPromise = new Promise(function (resolve) {
  resolve(100);
});
var thenPromise = aPromise.then(function (value) {
  console.log(value);
});
var catchPromise = thenPromise.catch(function (error) {
  console.error(error);
});
console.log(aPromise !== thenPromise); // => true
console.log(thenPromise !== catchPromise);// => true

var test = new Promise(function (resolve) {
  resolve(100);
});
test = test.then(function (value) {
  console.log(value);
});
test = test.catch(function (error) {
  console.error(error);
});
console.log(test !== test); // => true
console.log(test !== test);// => true