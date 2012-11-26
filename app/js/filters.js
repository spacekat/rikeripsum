'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('shuffle', [function() {
    return function(data) {
      for(var j, x, i = data.length; i; j = parseInt(Math.random() * i), x = data[--i], data[i] = data[j], data[j] = x);
      return data;
    }
  }]).
  filter('truncate', [function() {
    // "characters" are actually "quotes" now. need to rename.
    return function(data, characters) {
      return data.slice(0, characters);
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
