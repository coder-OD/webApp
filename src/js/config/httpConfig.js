/**
 * Created by OD on 2017/10/18.
 */


angular.module("app").config(["$sceDelegateProvider",function ($sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
        "self",
        "http://localhost/home.php"
    ])

}])