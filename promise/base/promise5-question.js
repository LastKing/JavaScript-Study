function taskA() {
  console.log("Task A");
}
function taskB() {
  console.log("Task B");
}
function onRejected(error) {
  console.log("Catch Error: A or B", error);
}
function finalTask() {
  console.log("Final Task");
}

//    var promise = Promise.resolve();
//    promise.then(taskA)
//            .then(taskB)
//            .catch(onRejected)
//            .then(finalTask);


var promise = Promise.resolve();
promise.then(function () {
  setTimeout(function () {
    console.log("Task A");
  }, 1000)
}).then(function () {
  console.log("Task B");
}).catch(function (error) {
  console.log("Catch Error: A or B", error);
}).then(function () {
  console.log("Final Task");
});
