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