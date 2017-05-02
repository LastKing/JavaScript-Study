/**
 * 从Chrome源代码看JS Array的实现
 * Created by Rain on 2017/5/2.
 */
//队列
var stack = [1, 2, 3];
stack.push(4);          //入栈
var top = stack.pop();  //出栈
console.log(top);

//队列
var queue = [1, 2, 3];
queue.push(4);             //入队
var head = queue.shift();  //出队
console.log(head);

//hash表方式 （不推荐）
var map = [];
map["id"] = 1234;
map["name"] = "yin";
console.log(map["name"]);

//随时随地增删数组中任意位置的元素：
var array = [1, 2, 3, 4];
array.splice(2, 1, -1, -2);
//再来个2000的索引
array[20] = 10;
console.log(array);
