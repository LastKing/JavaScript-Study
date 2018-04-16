/**
 * Created by Rain on 2018/4/16
 */
// 注意： 由于next方法的参数表示上一个yield表达式的返回值，V8 引擎直接忽略第一次使用next方法时的参数。
function* dataConsumer() {
  console.log('Started');
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  return 'result';
}

let genObj = dataConsumer();
genObj.next();// Started               暂停位置 ：1.{yield}
console.log(genObj.next('a'));// 1. a              2.{yield}
console.log(genObj.next('b'));// 2. b              3.return
