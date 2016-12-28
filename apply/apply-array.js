/**
 * Created by Rain on 2016/12/23.
 */
function returnArguments() {
  return arguments;
}

var a1 = returnArguments.apply(null, {length: 20});
console.log(Array.isArray(a1));
console.log(a1);


function createArray(...args) {
  return args;
}

var a2 = createArray.apply(null, {length: 20});
console.log(Array.isArray(a2));
console.log(a2);