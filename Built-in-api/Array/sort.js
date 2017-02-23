/**
 * Created by Rain on 2017/2/23.
 */
var a = [{
  color: 'red',
  size: 'A'
}, {
  color: 'black',
  size: 'B'
}, {
  color: 'white',
  size: 'C'
}, {
  color: 'red',
  size: 'C'
}, {
  color: 'white',
  size: 'B'
}, {
  color: 'black',
  size: 'C'
}];


a.sort((x, y) => x.size > y.size).sort((x, y) => x.color > y.color);
console.log(a);


