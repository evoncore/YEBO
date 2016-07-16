
'use strict';

// Home section

var homeSection = (function() {

    var main = $('#home');
  //----------------------

  return {
    height: function() {
      main.css({height: $('body').innerHeight()})
    }
  };

}());



homeSection.height();

$(window).on('resize', function() {
  homeSection.height();
});