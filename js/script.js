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
  
  const ImagePaths = {imgcontainer: ["ris12.png","ris2.png","ris3.png"],
                      aboutslider: ["ris9.jpg","ris8.jpg"]
  };
  const Activity_spans = ["Монтаж металлоконструкций","Устройство фундамента","Монтаж сэндвич-панелей"];
  let currentIndex1 = 0;
  let currentIndex2 = 0;

  function chImageSRC(){
    /* IMG CONTAINER */
    $("#progress_fill").stop().css("width", 0);
    $(".overlay-bot .overlay-span span").text(Activity_spans[currentIndex1]).fadeOut(100).fadeIn(100);
    $("#m_iimg").attr("src", "img/"+ImagePaths.imgcontainer[currentIndex1]);
    currentIndex1 = (currentIndex1+1) % ImagePaths.imgcontainer.length;
    $("#progress_fill").animate({
      width: "100%"
    }, 5000, "linear");

    /* ABOUT SLIDER */
    $(".about-us__slider-img #img-container__item").attr("src", "img/"+ImagePaths.aboutslider[currentIndex2]);
    /*console.log(currentIndex2);
    console.log(ImagePaths.aboutslider[currentIndex2]);*/
    currentIndex2 = (currentIndex2+1) % ImagePaths.aboutslider.length;
  }

  setInterval(chImageSRC, 5000);

});
