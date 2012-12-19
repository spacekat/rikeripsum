'use strict';

/* Controllers */
function IpsumCtrl($scope, $http) {
  $scope.quoteCount = 1;
  $scope.ipsum = ""
  $scope.getIpsum = function() {
    $http.get("/ipsum/words.txt").success(function(data) {
      $scope.ipsum = shuffle(data.split("\n"));
    })
  }
  function shuffle(data) {
    for(var j, x, i = data.length; i; j = parseInt(Math.random() * i), x = data[--i], data[i] = data[j], data[j] = x);
    return data;
  }
  $scope.tooFew = function() {
    if ($scope.quoteCount < 2) return true;
    else return false;
  }
  $scope.getIpsum();
  $scope.addIpsum = function() {
    $scope.quoteCount = $scope.quoteCount + 1;
  }
  $scope.lessIpsum = function() {
    $scope.quoteCount = $scope.quoteCount - 1;
  }
}

function selectText(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
  }
}
