/**
 * Created by Rain on 2017/4/28.
 */
var http = require('http');

var data = {
  str: encodeURIComponent('s'),
  url: encodeURIComponent('s')
};

var content = require('querystring').stringify(data);

var options = {
  method: "POST",
  host: "localhost",//注意没有http://，这是服务器的域名。
  port: 3000,
  path: '/api/user/LoginByCode.ac',//接收程序的路径和文件名
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    "Content-Length": content.length
  }
};

var req =http.request(options, (res) => {
  res.setEncoding('utf8');

  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
  res.on('end', function () {
    console.log('end');
  });
  res.on('error', function (err) {
    console.error(err);
  })
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(content);
req.end();

console.log(__dirname);