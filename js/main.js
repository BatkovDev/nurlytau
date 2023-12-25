document.addEventListener("DOMContentLoaded", ()=>{
  initMap();

  async function initMap() {
     await ymaps3.ready;
     const {YMap, YMapDefaultSchemeLayer} = ymaps3;
     const map = new YMap(
         document.getElementById('foo-map'),
         {
             location: {
                 center: [53.308779, 69.393912],
                 zoom: 10
             }
         }
     );

     map.addChild(new YMapDefaultSchemeLayer());
  }
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerMenu = document.querySelector('.responsive-nav');

  burgerBtn.addEventListener('click', function () {
    burgerMenu.classList.toggle('show');
    if(burgerBtn.setAttribute("icon", burgerMenu.classList.contains("show") ? "bi:x" : "bi:list"));
  });
});
