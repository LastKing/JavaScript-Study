/**
 * Created by toonew on 2015/12/25.
 */


var mySingleton = function () {
  var privateVariable = 'some private';

  function showPrivate() {
    console.log(privateVariable);
  }

  return {
    publicMethod: function () {
      showPrivate();
    },
    publicVar: 'this public can see this'
  };

};

var single = mySingleton();
single.publicMethod();
console.log(single.publicVar);


