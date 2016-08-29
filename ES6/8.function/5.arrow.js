/**
 * Created by Rain on 2016/8/16.
 */
var f = v=>v;

//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
var f2 = id=> ({
  _id: 2
});

console.log(f2());


function s() {
}
export function sx() {
}
export {s};

exports.s2 = s;
module.exports.s3 = s;