/**
 * 记一条 别人面试的  面试题  实现一个简单的promisify
 * Created by Rain on 2019-04-24
 */
const fs = require('fs');

function promisify(fun) {
  return function (...argument) {
    return new Promise((resolve, reject) => {
      fun(...argument, function (err, result) {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }
}


async function test() {
  let readdir = promisify(fs.readdir);

  let result = await readdir('../');
  console.log(result);
}

test().then();
