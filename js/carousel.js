var doc = $(document);
doc.ready(function (){
  var instances = $(".projects__section");
  $.each(instances, function (key, value) {
    var buttons = $(instances[key]).find(".projects__button-scroll");
    var prevBtn = buttons.filter('.prev');
    var nextBtn = buttons.filter('.next');
    var box = $(instances[key]).find(".projects__section-container");
    var x = 0;
    var mx = 0;
    var maxScrollWidth = box[0].scrollWidth - (box[0].clientWidth / 2) - (box.width() / 2);
    var isScroll = box[0].scrollWidth > box[0].clientWidth;
    toggleBtns();

    $(buttons).on('click', function () {
      if ($(this).hasClass("next")) {
        x = ((box.width() / 2)) + box.scrollLeft()-10;
        box.animate({
          scrollLeft: x,
        });
      } else {
        x = ((box.width() / 2))-box.scrollLeft()-10;
        box.animate({
          scrollLeft: -x,
        });
      }
    });

    $(box).on({
      mousemove: function (e) {
        var mx2 = e.pageX-this.offsetLeft;
        if (mx) this.scrollLeft = this.sx+mx-mx2;
      },
      mousedown: function (e) {
        this.sx = this.scrollLeft;
        mx = e.pageX - this.offsetLeft;
      },
      scroll: function () {
        toggleBtns();
      }
    });

    doc.on("mouseup", function () {
      mx = 0;
    });

    function toggleBtns() {
      if (isScroll) {
        buttons.removeClass('disabled');
        if (box.scrollLeft() > maxScrollWidth-10){
          nextBtn.addClass('disabled');
        }else if (box.scrollLeft() < 10){
          prevBtn.addClass('disabled');
        }else{
          nextBtn.removeClass('disabled');
          prevBtn.removeClass('disabled');
        }
      }else{
        buttons.addClass('disabled');
      }
    }
  });
});