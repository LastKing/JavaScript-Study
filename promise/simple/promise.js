/**
 * http://bupt-hjm.github.io/2017/03/23/study-promise/
 * Created by toonew on 2017/3/31.
 */
function P(fn) {
  var value = null;
  var events = [];
  this.then = function (f) {
    events.push(f);
    return this;
  };
  function resolve(newValue) {
    var f = events.shift();
    f(newValue, resolve);
  }

  fn(resolve);
}

function a() {
  return new P(function (resolve) {
    console.log('get...');
    setTimeout(function () {
      console.log('get 1');
      resolve(1);
    }, 1000)
  })
}

a().then(function (value,resolve){
  console.log("get...");
  setTimeout(function() {
    console.log("get 2");
    resolve(2);
  }, 1000)
}).then(function(value, resolve) {
  console.log(value)
});





