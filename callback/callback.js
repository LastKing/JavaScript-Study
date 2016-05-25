/**
 * Created by Rain on 2016/4/20.
 */
function test(xx, callback) {
  setTimeout(function () {
    if (xx == true) {
      callback(err);
    }
  }, 2000);
}

test(true, function (eer,result) {
  console.log('fds');
});
