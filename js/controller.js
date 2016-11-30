app.controller('myCtrl', function($scope, $http){

    $scope.title = "";
    $scope.myWelcome = {};
    
    $scope.search = function() {
      $http.get('https://www.omdbapi.com/?t=' + $scope.title).then(function(response) {
        $scope.myWelcome = response.data;
      console.log(response.data);
        });
    }

});

