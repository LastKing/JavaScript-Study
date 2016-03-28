/**
 * Created by Rain on 2016/3/28.
 */
var oValue;
console.log(oValue);

//根本就没有 声明则 报错
console.log(global.uValue === undefined);// 不会报错
console.log(uValue === undefined);// 报错

function c() {
}
var d = new c();
console.log(d.a);






