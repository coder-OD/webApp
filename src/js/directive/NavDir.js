

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