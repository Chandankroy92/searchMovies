app.controller('myCtrl', function($scope, $http,$location){

    $scope.title = "";
    $scope.myWelcome = {};
    
    $scope.search = function() {
      $http.get('https://www.omdbapi.com/?t=' + $scope.title).then(function(response) {
        $scope.myWelcome = response.data;
      console.log(response.data);
        });
    }
    
    $scope.addMovies = function() {
         $location.path('/movie-list');
     }

});

app.controller('addMovieCtrl',['$scope','$localStorage','$location', function($scope, $localStorage, $location){
    
    $scope.init = function() {
                if($localStorage.PersonalStorage == undefined) {
                    $localStorage.PersonalStorage = [];
                }
            };
        $scope.init();
    
    $scope.save = function(mtitle,actor,director,year,dateRelease,desc) {
            
            var MovieInfo ={
                Title : $scope.mtitle,
                Actor : $scope.actor,
                Director : $scope.director,
                Year : $scope.year,
                Release : $scope.dateRelease,
                Description : $scope.desc, 
            }
            $localStorage.PersonalStorage.push(MovieInfo);
            console.log($localStorage.PersonalStorage);
        };
}]);