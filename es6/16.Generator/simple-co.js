/**
 * Created by toonew on 2017/5/10.
 */
function co(gen) {
  let g = gen();

  let next = (data) => {
    let middleware = g.next(data);
    if (middleware.done) {
      return middleware.value
        .then(ret => Promise.resolve(ret))
        .catch(ret => Promise.reject(ret));
    }
    return middleware.value.then(ret => next(ret));
  };

  return next();
}


let time = i => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(i);
    resolve(i * i)
  }, 1000)
});

co(function*() {
  let j = 2;
  for (let i = 0; i < 5; i++) {
    j = yield time(j);
  }
});