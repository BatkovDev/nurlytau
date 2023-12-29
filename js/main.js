document.addEventListener("DOMContentLoaded", ()=>{
  /*initMap();

  async function initMap() {
     await ymaps3.ready;
     const {YMap, YMapDefaultSchemeLayer} = ymaps3;
     const map = new YMap(
         document.getElementById("foo-map"),
         {
             location: {
                 center: [53.308779, 69.393912],
                 zoom: 10
             }
         }
     );

     map.addChild(new YMapDefaultSchemeLayer());
  }*/
  const burgerBtn = document.querySelector(".burger-btn");
  const burgerMenu = document.querySelector(".responsive-nav");

  burgerBtn.addEventListener("click", function () {
    burgerMenu.classList.toggle("show");
    if(burgerBtn.setAttribute("icon", busrgerMenu.classList.contains("show") ? "bi:x" : "bi:list"));
  });

  document.querySelector(".feedback-form-btn").addEventListener("click", function () {
    document.querySelector(".feedback").classList.toggle("open");
  });

  document.querySelector(".feedback-close").addEventListener("click", function () {
    document.querySelector(".feedback").classList.remove("open");
  });

  document.querySelector(".feedback").addEventListener("click", function (event) {
    if (!event.target.closest(".feedback-modal")) {
      document.querySelector(".feedback").classList.remove("open");
    }
  });

  /*const media = document.querySelectorAll("img");
  const preloader = document.querySelector(".preloader")
  const percent = document.querySelector(".preloader__load-percents span");
  let i = 0;
  media.forEach((file, index) => {
    file.onload = () => {
      i++;

      calcPercent = Math.ceil((i*100) / media.length);
      if(calcPercent > 100) calcPercent = 100;
      percent.innerHTML = calcPercent;

      if(i === media.length){
        percent.innerHTML = 100;
        preloader.classList.add("hidden");
      }
    }
  })*/
});
