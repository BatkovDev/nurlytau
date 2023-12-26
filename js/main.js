document.addEventListener("DOMContentLoaded", ()=>{
  initMap();

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
  }
  const burgerBtn = document.querySelector(".burger-btn");
  const burgerMenu = document.querySelector(".responsive-nav");

  burgerBtn.addEventListener("click", function () {
    burgerMenu.classList.toggle("show");
    if(burgerBtn.setAttribute("icon", busrgerMenu.classList.contains("show") ? "bi:x" : "bi:list"));
  });

  document.querySelector(".botbtn__contacts-modal").addEventListener("click", function () {
    document.querySelector(".mobile__contacts").classList.toggle("open");
  });

  document.querySelector(".mobile__contacts-modal .modal-close").addEventListener("click", function () {
    document.querySelector(".mobile__contacts").classList.remove("open");
  });

  document.querySelector(".mobile__contacts").addEventListener("click", function (event) {
    if (!event.target.closest(".mobile__contacts-modal")) {
      document.querySelector(".mobile__contacts").classList.remove("open");
    }
  });
});
