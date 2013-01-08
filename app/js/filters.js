'use strict';

/* Filters */
myApp.filter('truncate', function() {
  return function(data, quoteCount) {
    return data.slice(0, quoteCount);
  };
});

myApp.filter('join', function() {
  return function(data) {
    if (data.join) {
      return data.join(' ');
    } else {
      return '';
    }
  };
});
