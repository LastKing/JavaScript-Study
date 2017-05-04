/**
 * https://segmentfault.com/q/1010000009281892
 * Created by Rain on 2017/5/4.
 */
var endorsements = [
  {skill: 'javascript', user: 'Chad'},
  {skill: 'javascript', user: 'Bill'},
  {skill: 'javascript', user: 'Sue'},
  {skill: 'html', user: 'Sue'},
  {skill: 'css', user: 'Sue'},
  {skill: 'css', user: 'Bill'}
];

function change(obj) {
  var type = [];
  var result = [];

  for (var temp of obj) {
    var flag = -1;
    for (let j = 0; j < result.length; j++) {
      if (result[j]['skill'] === temp.skill) {
        flag = 1;
      }
    }

    if (flag === -1) {
      temp.users = [temp.user];
      delete temp.user;
      temp.count = 1;
      result.push(temp);
    } else {
      for (let j = 0; j < result.length; j++) {
        if (result[j].skill === temp.skill) {
          result[j].users.push(temp.user);
          result[j].count = result[j].users.length;
        }
      }
    }

  }

  return result;
}

// console.time('change');
// var result = change(endorsements);
// console.timeEnd('change');
// console.log(result);

//SF提供的方案
let output = [];
endorsements.reduce((dict, item) => {
  if (!dict[item.skill]) {
    dict[item.skill] = {
      skill: item.skill,
      user: [item.user],
      count: 1
    };
    output.push(dict[item.skill])
  } else {
    dict[item.skill].user.push(item.user);
    dict[item.skill].count += 1
  }
  return dict
}, {});

console.time('change2');
output = output.sort((a, b) => b.count - a.count);
console.timeEnd('change2');

// console.log(output);

console.log(" 以上两种方案： 第一种是简单的for 循环 ，第二种使用的是reduce");
console.log(" for    循环在500元素以下 是 优势的 ");
console.log(" reduce 循环在500元素以上 是 优势的 ");
console.log(" reduce 是一个稳定的方式，数据就算几千也是稳定的 ");
