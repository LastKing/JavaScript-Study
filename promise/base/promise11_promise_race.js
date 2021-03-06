function timerPromisefy(delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(delay);
    }, delay)
  });
}

Promise.race([
  timerPromisefy(1),
  timerPromisefy(32),
  timerPromisefy(64),
  timerPromisefy(128)
]).then(function (value) {
  console.log(value);
});

var winnerPromise = new Promise(function (resolve) {
  setTimeout(function () {
    console.log('this is winner');
    resolve('this is winner');
  }, 4);
});
var loserPromise = new Promise(function (resolve) {
  setTimeout(function () {
    console.log('this is loser');
    resolve('this is loser');
  }, 3000);
});
// 第一个promise变为resolve后程序停止
Promise.race([winnerPromise, loserPromise]).then(function (value) {
  console.log(value);    // => 'this is winner'
});