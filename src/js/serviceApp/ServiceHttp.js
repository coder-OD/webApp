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