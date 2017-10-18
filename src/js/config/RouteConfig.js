
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
