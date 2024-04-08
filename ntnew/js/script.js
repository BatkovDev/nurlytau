$(document).ready(function (){
  $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      if ($target.length) {
          $('html, body').animate({
              'scrollTop': ($target.offset().top - 70)
          }, 1000, 'swing');
      }
  });
});