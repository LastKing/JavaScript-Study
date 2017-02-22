/**
 * Created by Rain on 2016/4/20.
 */
function test(xx, callback) {
  setTimeout(function () {
    if (xx == true) {
      callback('错误');
    }
  }, 2000);
}

test(true, function (err, result) {
  console.log(err);
});
