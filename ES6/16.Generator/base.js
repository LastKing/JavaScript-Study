/**
 * Created by toonew on 2017/3/19.
 */
function* hellowWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'end'
}

var hw = hellowWorldGenerator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
