$(document).ready(function (){
  $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      if ($target.length) {
          $('html, body').animate({
              'scrollTop': $target.offset().top
          }, 1000, 'swing');
      }
  });
  
  const ImagePaths = {
    imgcontainer: ["ris12.png", "ris2.png", "ris3.png"],
    aboutslider: ["ris9.jpg", "ris8.jpg"]
  };
  const Activity_spans = ["Монтаж металлоконструкций", "Устройство фундамента", "Монтаж сэндвич-панелей"];
  let currentIndex1 = 0;
  let currentIndex2 = 0;


  function chImageSRC() {
    /* IMG CONTAINER */
    $("#progress_fill").stop().css("width", 0);

    $(".overlay-bot .overlay-span span").fadeOut(100, function() {
      $(this).text(Activity_spans[currentIndex1]).fadeIn(100);
    });

    $("#m_iimg").fadeOut(100, function() {
      $(this).attr("src", "img/" + ImagePaths.imgcontainer[currentIndex1]).fadeIn(100);
    });

    currentIndex1 = (currentIndex1 + 1) % ImagePaths.imgcontainer.length;

    $("#progress_fill").animate({
      width: "100%"
    }, 5000, "linear");

    /* ABOUT SLIDER */
    $(".about-us__slider-img #img-container__item").fadeOut(100, function() {
      $(this).attr("src", "img/" + ImagePaths.aboutslider[currentIndex2]).fadeIn(100);
    });

    currentIndex2 = (currentIndex2 + 1) % ImagePaths.aboutslider.length;
  }

  setInterval(chImageSRC, 5000);
});
