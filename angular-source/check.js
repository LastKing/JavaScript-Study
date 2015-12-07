/**
 * Created by toonew on 2015/12/7.
 */
var root = angular.module('root', []);

root.controller('RootCtrl', function ($scope) {

  $scope.getCheck = function () {
    alert($scope.test);
  }
});

