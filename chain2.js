/**
 * Created by Rain on 2017/2/16.
 */
//参考：
// https://segmentfault.com/q/1010000006033084
// https://segmentfault.com/q/1010000004342477

function add(n) {
  function fn(m) {
    //在函数中添加判断，当没有输入参数时，直接返回调用的结果而不是返回函数
    if (arguments.length === 0) {
      return n;
    } else {
      return add(n + m);
    }
  }

  //利用JS中对象到原始值的转换规则
  fn.valueOf = function () {
    return n;
  };

  fn.toString = function () {
    return "" + n;
  };

  return fn;
}

console.log(add(1)(2));
console.log(add(1)(2)());
console.log(+add(1)(2)(3));


///第二种实现
var add2=(function(){
  var args=[];
  function addInner(){
    if(arguments.length===0){
      return calResult;
    }else{
      Array.prototype.push.apply(args,Array.prototype.splice.call(arguments,0));
      return add;
    }

  }
  function calResult(){
    var result=args.reduce(function(previousValue, currentValue){
      return previousValue+currentValue;
    },0);
    args=[];
    return result;
  }
  addInner.valueOf=function(){
    return calResult();
  };

  addInner.toString=function(){
    return calResult()+'';
  };

  return addInner;
}());


console.log('%d',add2(1)(2)(3)(4));



