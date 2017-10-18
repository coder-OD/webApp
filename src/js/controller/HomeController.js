/**
 * Created by OD on 2017/10/18.
 */


angular.module("app").controller("HomeController",["$scope","yxfHttp",function ($scope,yxfHttp) {
    $scope.name = "我是 HomeController name";

    //跨域请求
    yxfHttp.getData(function (res) {
        $scope.listData = res;
    },function (err) {

    })

}])