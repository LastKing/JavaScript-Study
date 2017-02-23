/**
 *  出处： https://segmentfault.com/q/1010000008460561
 * Created by toonew on 2017/2/23.
 */
function sidEffecting(ary) {
  ary[0] = ary[2];
}
function bar(a, b, c) {  // c无赋值
  c = 10;
  sidEffecting(arguments);
  return a + b + c;
}

console.log(bar(1, 1, 1));


function bar2(a, b, c = 3) {  // c=3
  c = 10;
  sidEffecting(arguments);
  return a + b + c;
}
console.log(bar2(1, 1, 1));

function bar3(a, b, c) {  // c=3
  //如果 c上有赋值并且写上“严格模式”
  // Illegal 'use strict' directive in function with non-simple parameter list
  "use strict";

  c = 10;
  sidEffecting(arguments);
  return a + b + c;
}
console.log(bar3(1, 1, 1));