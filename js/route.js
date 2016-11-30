var app = angular.module("movieSearch", ["ngRoute",'ngStorage']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "movie.html",
        controller : "myCtrl"
    })
    .when( '/cart-list', {
        templateUrl:"MovieList.html",
         controller : "cartCtrl"
    });
 });


    