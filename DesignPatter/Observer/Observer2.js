/**
 * Created by Rain on 2016/11/11.
 */
function Observer() {
  this.fns = [];
}

Observer.prototype = {
  //订阅
  subscribe: function (fn) {
    this.fns.push(fn);
  },

  //退订
  unsubscribe: function (fn) {
    this.fns = this.fns.filter(
        function (el) {
          if (el !== fn) {
            return el;
          }
        }
    )
  },

  //发布
  update: function (o, thisObj) {
    var scope = thisObj || global;
    this.fns.forEach(function (el) {
      el.call(scope, o);
    })
  }
};

var o = new Observer();
var o2 = new Observer();

var f1 = function (data) {
  console.log('Robbin:' + data + ',不干活了！');
};

var f2 = function (data) {
  console.log('Randall:' + data + ',找她加工资');
};

o.subscribe(f1);
o.subscribe(f2);

o.update('Tom 回来了');

o.unsubscribe(f1);

o.update('Tom  回来了');


o2.subscribe(f1);
o2.update();