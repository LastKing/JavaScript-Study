/**
 * Created by Rain on 2017/3/23.
 */

async function print() {
  var result = await time2();
  console.log(result);
  return 2;
}

function time2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  })
}

var result = print();
// console.log(result);//promise
result.then(result => console.log(result));


//会将 await 后面的
async function baseValue() {
  return await  123;  //await命令的参数是数值123，它被转成 Promise 对象，并立即resolve。
}

var baseV = baseValue();
//不加 await 会输出 Promise {    123    }
//加了 await 会输出 Promise { <pending> }   不懂。。。
console.log(baseV);
baseV.then(result => console.log(result));


