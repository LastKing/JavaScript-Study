var promise = Promise.reject(new Error("message"));
promise.catch(function (error) {
  console.error(error);
});

var promise2 = Promise.reject(new Error("message"));
promise2["catch"](function (error) {
  console.error(error);
});