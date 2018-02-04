/**
 * Created by toonew on 2017/5/10.
 */
const co = require('co'); //co@4.6.0

let time = i => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(i);
    resolve(i * i)
  }, 1000)
});

co(function*() {
  let j = 2;
  for (let i = 0; i < 5; i++) {
    j = yield time(j);
  }
});