/**
 * Created by toonew on 2017/2/8.
 */
const s = new Set();

[2, 2, 3, 4, 5, 6, 7, 8].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}

//初始化
let set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);

let items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size);

//数组去重
console.log([...new Set([1, 2, 2, 3, 3, 4, 4])]);


//2. 属性和方法


//3. 遍历操作
// Set的遍历顺序就是插入顺序。
// keys ,values  由于无键名，所有两者相同
let set3 = new Set(['red', 'green', 'blue']);

for (let item of set3.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set3.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set3.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]