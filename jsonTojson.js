/**
 * Created by Rain on 2017/2/15.
 */
// https://segmentfault.com/q/1010000008350672
var rs = {
  head: ["id", "name"],
  data: [[100, "tom"], [101, "jane"]]
};

/*  转换成
 arr = [
 {id: 100, name: "Tom"},
 {id: 101, name: "Jane"}
 ]
 */

function test1(rs) {
  let result = [];

  for (let data of rs.data) {
    let obj = {};

    for (let j = 0; j < rs.head.length; j++) {
      obj[rs.head[j]] = data[j];
    }

    result.push(obj);
  }
  return result;
}

console.log(test1(rs));


//数据
var rs2 = {
  head: ["id", "name"],
  data: [[100, "Tom"], [101, "Jane"], [102, "Tom"]]
};

var result1 = fun(rs2, "name");
var result2 = fun(rs2, "id");
console.log(result1);
console.log(result2);
//结果
// result1 = {
//   "Tom": [{id: 100, name: "Tom"}, {id: 102, name: "Tom"}],
//   "Jane": [{id: 101, name: "Jane"}]
// };
// result2 = {
//   100: [{id: 100, name: "Tom"}],
//   101: [{id: 101, name: "Jane"}],
//   102: [{id: 102, name: "Tom"}]
// };

function fun(rs, key) {
  let result = {};
  let index = -1;

  for (let i = 0; i < rs.head.length; i++) {
    if (rs.head[i] === key) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return result;
  }

  rs.data.forEach(function (item) {
    let type = item[index];

    if (typeof result[type] === 'undefined') {
      result[type] = [];
    }
    result[type].push(item);
  });

  return result;
}











