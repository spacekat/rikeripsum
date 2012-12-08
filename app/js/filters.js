'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('truncate', [function() {
    return function(data, quoteCount) {
      return data.slice(0, quoteCount);
    }
  }]).
  filter('join', [function() {
    return function(data) {
      if(data.join) {
        return data.join(" ");
      } else {
        return "";
      }
    }
  }]);
