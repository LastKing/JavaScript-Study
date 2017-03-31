/**
 * http://tech.meituan.com/promise-insight.html
 * Created by toonew on 2017/3/31.
 */
function Promise(fn) {
  var state = 'pending';
  var value = null,
    deferreds = [];

  this.then = function (onFulfilled) {
    return new Promise(function (resolve) {
      handler({
        onFulfilled: onFulfilled || null,
        resolve: resolve
      })
    })
  };

  function handler(deferred) {
    if (state === 'pending') {
      deferreds.push(deferred);
      return;
    }
    var ret = deferred.onFulfilled(value);
    deferred.resolve(ret);
  }

  function resolve(newValue) {
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (typeof then === 'function') {
        then.call(newValue, resolve);
        return;
      }
    }
    value = newValue;
    state = 'fulfilled';
    setTimeout(function () {
      deferreds.forEach(function (deferred) {
        deferred(value);
      })
    }, 0);
  }

  fn(resolve);
}

var p1 = new Promise((resolve) => {
  setTimeout(function () {
    resolve(10);
  }, 1000);
});

p1.then((result) => {
  console.log(result);
}).then((result) => {
  console.log(result);
});