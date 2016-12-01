
app.controller('myCtrl', function($scope, $http, $location, $localStorage){


    $scope.title = "";
    $scope.myWelcome = [];
    
    $scope.init = function() {
                if($localStorage.farourite == undefined) {
                    $localStorage.farourite=[];
                }
            };
        $scope.init();
    
    
    $scope.search = function() {
      $http.get('https://www.omdbapi.com/?s=' + $scope.title).then(function(response) {
        $scope.myWelcome = response.data;
      console.log(response.data);
        });
    }
    
    $scope.addMovies = function(movies) {
         $localStorage.farourite.push(movies);
        console.log($localStorage.farourite);
        alert("Movie add to Favourite");
     }
 
    $scope.show = function() {
         $location.path('/movie-list');
     }

});

app.controller('forouriteListCtrl',['$scope','$localStorage','$location','$route', function($scope, $localStorage, $location, $route){
    
   
    $scope.fvrtmovies=$localStorage.farourite;
    console.log($scope.fvrtmovies);
    
    $scope.removeProduct = function(index){
         $scope.fvrtmovies.splice(index,1);
         
     }
    
    $scope.clearAll = function(){
       $localStorage.$reset();
       $route.reload();
   }
}]);

