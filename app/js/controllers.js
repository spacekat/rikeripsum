'use strict';

/* Controllers */
function Ipsum($scope, $http) {
  $scope.ipsum = ""
  $scope.getIpsum = function() {
    $http.get("/app/ipsum/words.txt").success(function(data) {
      $scope.ipsum = data.split("\n");
    })
  }
}
