/**
 * Created by Rain on 2015/12/7.
 */
angular.module('greetMod', []).

factory('alert', function($window) {
  return function(text) {
    $window.alert(text);
  }
}).

value('salutation', 'Hello').

factory('greet', function(alert, salutation) {
  return function(name) {
    alert(salutation + ' ' + name + '!');
  }
});