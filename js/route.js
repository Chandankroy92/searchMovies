var app = angular.module("movieSearch", ["ngRoute",'ngStorage']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "movie.html",
        controller : "myCtrl"
    })
    .when( '/movie-list', {
        templateUrl:"favouriteList.html",
         controller : "forouriteListCtrl"
    });
 });


    