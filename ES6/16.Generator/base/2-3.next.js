/**
 * 有点绕的例子。。感觉很蛋疼。。。倒也还是理解了
 * Created by Rain on 2018/4/16
 */
function wapper(generatorFunction) {
  return function (...args) {
    let generatorObject = generatorFunction(...args);
    generatorObject.next();
    return generatorObject;
  }
}

const wrapped = wapper(function* () {
  console.log(`First input: ${yield}`);
  return 'DONE';
});

wrapped().next('hello!');  //First input: hello!