const swiperHeader = new Swiper('#home .swiper', {
  loop: true,
  autoplay: {
    delay: 8000, // Автоматическая прокрутка слайдов через 5 секунд
    disableOnInteraction: false, // Отключение автовоспроизведения при взаимодействии пользователя
  },

  direction: 'horizontal',
  speed: 300,
  effect: "fade",

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiperAbout = new Swiper('#about .swiper', {
  loop: true,
  autoplay: {
    delay: 5000, // Автоматическая прокрутка слайдов через 5 секунд
    disableOnInteraction: false, // Отключение автовоспроизведения при взаимодействии пользователя
  },

  direction: 'horizontal',
  speed: 300,
  effect: "fade",

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

new Swiper('.projectsSwiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  },
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const burgerMenuOpen = document.querySelector("#header .burger-btn");
const burgerMenuClose = document.querySelector("#header .burger-close");

burgerMenuOpen.addEventListener("click", () => {
  document.querySelector("#header .links").classList.toggle("show");
});
burgerMenuClose.addEventListener("click", () => {
  document.querySelector("#header .links").classList.remove("show");
});
