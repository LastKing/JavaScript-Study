//http://docs.ngnice.com/guide/module
var myModule = angular.module('myModule', []);

// 添加一些指令和服务
myModule.service('myService', function () {
});
myModule.directive('myDirective', function () {
});

// 创建一个新模块将覆盖掉这些指令和服务
var myModule = angular.module('myModule', []);

// 由于myOtherModule模块还没有定义，所以会抛出一个异常
var myModule = angular.module('myOtherModule');