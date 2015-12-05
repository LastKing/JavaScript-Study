/**
 * Created by Rain on 2015/12/5.
 */

function makeIterator(array) {
  var nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {done: true};
    }
  }

}
var it = makeIterator(['yo', 'ya']);


console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);