/**
 * Created by Rain on 2016/8/29.
 */
function add([x,y]) {
  console.log(x + y);
}

add([1, 2]);


function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

function move2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move2({x: 3, y: 8}); // [3, 8]
move2({x: 3}); // [3, undefined]
move2({}); // [undefined, undefined]
move2(); // [0, 0]

