var pubsub = {};

(function (q) {
  var topics = {};//回调函数 数组
  var subUid = -1;

  //发布方法
  q.publish = function (topic, args) {
    if (!topics[topic]) {
      return false;
    }

    setTimeout(function () {
      var subscribers = topics[topic];
      var len = subscribers ? subscribers.length : 0;

      while (len--) {
        subscribers[len].func(topic, args);
      }
    }, 0);

    return true;
  };

  //订阅方法
  q.subscribe = function (topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }

    var token = (++subUid).toString();
    topics[topic].push({
      token: token,
      func: func
    });
    return token;
  };

  q

})();





















