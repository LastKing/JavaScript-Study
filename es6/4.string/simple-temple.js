/**
 * Created by Rain on 2016/11/30.
 */
//17 行代码实现的简易 Javascript 字符串模板 [ https://segmentfault.com/a/1190000004428305 ]
function render(template, context) {
  /*
   /g 全文查找匹配
   \\ 表示 直接 \ 一个直接量    ？ 表示存在1次或者0次
   \{    \}表示  { 和 } 的直接量
   [^\{\}\\] 表示不存在 { } \ 这个三个符号中的一次
   */
  var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
  // var tokenReg = /\{([^\{\}\\]+)\}/g;

  //replace返回
  // 第一个参数，匹配正则，
  // 第二个函数的参数：
  //    1. 匹配命中的字符串
  //    2. p1,p2,p3规定的()位置的值, p1 指(\\)匹配的值，p2 指 {xxx} 中的xxx， p3指的是(\\)匹配的值
  //    3. offset 偏移的数量 （这里没写）
  //    4. 被匹配的原字符串
  return template.replace(tokenReg, function (word, slash1, token, slash2) {
    if (slash1 || slash2) {
      return word.replace('\\', '');
    }

    var variables = token.replace(/\s/g, '').split('.');
    var currentObject = context;
    var i, length, variable;

    for (i = 0, length = variables.length; i < length; ++i) {
      variable = variables[i];
      currentObject = currentObject[variable];
      if (currentObject === undefined || currentObject === null) return '';
    }
    return currentObject;
  })
}

String.prototype.render = function (context) {
  return render(this, context);
};

var test = "{greeting}! My name is { author.name }.".render({
  greeting: "Hi",
  author: {
    name: "hsfzxjy"
  }
});
console.log(test);// Hi! My name is hsfzxjy.