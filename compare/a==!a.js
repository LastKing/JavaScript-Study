/**
 * https://segmentfault.com/q/1010000006637182
 * 在==比较时，相等运算符会先将数据进行类型转换，然后再用严格相等运算符比较
 * 比较字符串和布尔值都会转换成数值，提一下!!符号相当于Boolean。
 * 对于非布尔值的数据，取反运算符会自动将其转为布尔值。规则是，以下六个值取反后为true，其他值取反后都为false。
 * Created by Rain on 2017/3/11.
 */
// ! 优先级比 == 要高，所有后面会被处理成 boolean
// 那么 等号需要将值转化成 相同的 类型 再进行比较
// 还是有疑问。。这一块。。真几把诡异
var a = "0";
console.log(a == !a);

a = " ";
console.log(a == !a);

a = [];
console.log(a == !a);

console.log(Boolean('0') == true); // 所有非空字符串   true 处理
console.log(Boolean(' ') == true); // 所有非空字符串   true 处理
console.log(Boolean([]) == true);  // 所有的对象       true 处理

console.log('0' == false); // Boolean(Number('0'));
console.log(' ' == false); // Boolean(Number(' '));
console.log([] == false); //  Boolean([].toString());