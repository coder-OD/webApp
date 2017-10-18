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