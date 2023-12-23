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
  /*const media = document.querySelectorAll('img');
  const preloader = document.querySelector('.preloader')
  const percent = document.querySelector('.preloader__load-percents span');
  let i = 0;
  media.forEach((file, index) => {
    file.onload = () => {
      i++;

      calcPercent = Math.ceil((i*100) / media.length);
      if(calcPercent > 100) calcPercent = 100;
      percent.innerHTML = calcPercent;

      if(i === media.length){
        percent.innerHTML = 100;
        preloader.classList.add('hidden');
      }
    }
  })*/
});
