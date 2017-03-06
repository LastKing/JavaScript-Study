/**
 * https://github.com/creeperyang/blog/issues/2
 * 13
 * Created by Rain on 2017/3/6.
 */
// 12. 数组的展开/扁平

// 问题： [1,2,[2,3,[4,5]]]--->[1,2,2,3,4,5]

function flatten(arr) {
  if (!isArray(arr) || !arr.length) {
    return [];
  } else {
    return Array.prototype.concat.apply([], arr.map(function (val) {
      return isArray(val) ? flatten(val) : val;
    }));
  }

  function isArray(arr) {
    return Object.prototype.toString.call(arr).slice(8, -1).toLowerCase() === 'array';
  }
}
flatten([1, 2, [2, 3, [4, 5]]]);