/**
 * Created by Rain on 2015/12/23.
 */

function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3);

console.log(list1);
