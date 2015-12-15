/**
 * Created by toonew on 2015/12/16.
 */
// 修改 Object.prototype
Object.prototype.bar = 1;

var foo = {moo: 2};
for(var i in foo) {
  console.log(i); // 输出两个属性：bar 和 moo
}

for(var i in foo) {
  if (foo.hasOwnProperty(i)) {
    console.log(i);
  }
}