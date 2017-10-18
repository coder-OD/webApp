(function (angular) {

    var app = angular.module("app",['ui.router']);

    app.controller("AppController",["$scope",function ($scope) {
        $scope.Apptitle = "webApp";
        $scope.currentTitle = "首页";
        $scope.currentType = "home";
        $scope.tabChange = function (args) {
            $scope.currentType = args;
            // alert($scope.currentType);
            switch (args){
                case "home" :
                    $scope.currentTitle = "首页";
                    break;
                case "author" :
                    $scope.currentTitle = "作者";
                    break;
                case "content" :
                    $scope.currentTitle = "栏目";
                    break;
                case "my" :
                    $scope.currentTitle = "我的";
                    break;
            }

            /*发送一个广播给导航,让他该标题*/
            $scope.$broadcast("send",{title:$scope.currentTitle});
        }



    }])

})(angular)

angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('app',{
        url:'/',
        views:{
            home:{
                templateUrl:'../views/home_tpl.html',
                controller : "HomeController",
            },
            author:{
                template:'<h1>author</h1>'
            },
            content:{
                template:'<h1>content</h1>'
            },
            my:{
                template:'<h1>my</h1>'
            },
        }
    });

    $urlRouterProvider.otherwise('/');

}]);

/**
 * Created by OD on 2017/10/18.
 */


angular.module("app").config(["$sceDelegateProvider",function ($sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
        "self",
        "http://localhost/home.php"
    ])

}])
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
/**
 * Created by OD on 2017/10/18.
 */

angular.module("app").directive("list",function () {
    return{
        restrict : "EA",
        templateUrl:"../views/list_tpl.html",
        scope:{
            listarray:"="
        }
    }
})


angular.module("app").directive("navs",function () {
    return{
        restrict : "EA",
        templateUrl : "../views/nav_tpl.html",
        link : function ($scope,ele,attr) {

            $scope.$on("send",function ($event, args) {
                ele.find('span').html(args.title);

            })

        //    控制器返回按钮是否隐藏
            if(attr.isBack != "true"){
                ele.find("em").css({
                    "display":"none"
                })
            }
        }
    }
})


angular.module("app").directive("tabbar",function () {
    return{
        restrict : "EA",
        templateUrl : "../views/tabbar_tpl.html",


    }
})
/**
 * Created by OD on 2017/10/18.
 */

angular.module("app").service("yxfHttp",["$http",function ($http) {

    this.getData = function (success, error) {

        $http({
            url:"http://localhost/home.php",
            method : "jsonp",
        }).then(function (res) {
            success(res.data.posts);
        }).catch(function (err) {
            error(err);
        })

    }

}])