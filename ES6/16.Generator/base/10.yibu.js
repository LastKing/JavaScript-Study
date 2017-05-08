/**
 * Created by Rain on 2017/5/8.
 */
var i = 0;
i++;

function ajax(url) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(url);
      resolve({url: url + i++});
    }, 200);
  });
}

function *gen(url){
  var data=yield ajax(url);
  data=yield ajax(data.url);
  data=yield ajax(data.url);
  console.log(data.url);
}

function co(gen){
  var iterator = gen("http://www.baidu.com");
  var v = iterator.next();

  function step(v){
    if (!v.done){
      v.value.then(function(data){
        step(iterator.next(data));
      })
    }
  }

  step(v);
}

co(gen);
