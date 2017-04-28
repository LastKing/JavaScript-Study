/**
 * Created by Rain on 2017/4/28.
 */
var http = require('http');
var querystring = require('querystring');

function HttpPost(str, url, path, callback) {
  //将json发送到服务器，str为json内容，url为历史消息页面地址，path是接收程序的路径和文件名
  var data = {
    str: encodeURIComponent(str),
    url: encodeURIComponent(url)
  };
  var content = querystring.stringify(data);

  var options = {
    method: "POST",
    host: "localhost",//注意没有http://，这是服务器的域名。
    port: 80,
    path: path,//接收程序的路径和文件名
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      "Content-Length": content.length
    }
  };

  var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    var result;
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
      result += chunk;
    });

    res.on('end', function () {
      callback(null, result);
    })
  });

  req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
  });

  req.write(content);
  req.end();
}
