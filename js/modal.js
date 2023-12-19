document.addEventListener('DOMContentLoaded', function () {
  let imagesArray = [];
  let currentSlideIndex = 0;
  let projectBlock;

  function updateImagesArray() {
    imagesArray = [];
    const sliderImage = projectBlock.querySelector('.projects__block-img img').src;
    imagesArray.push(sliderImage);

    const thumbnailsBlock = projectBlock.querySelector('.projects__block-thumbnails');
    if (thumbnailsBlock) {
      const thumbnailImages = Array.from(thumbnailsBlock.querySelectorAll('img')).map(img => img.src);
      imagesArray.push(...thumbnailImages);
    }
    updateSlider();
  }

  function updateModalTitle() {
    const title = document.querySelector('.modal-title');
    title.innerHTML = projectBlock.querySelector('.projects__block-name').innerText;
  }

  function updateSlider() {
    const slider = document.querySelector('.modal-content .slider');
    const thumbnailsContainer = document.querySelector('.thumbnails');

    slider.innerHTML = '';
    thumbnailsContainer.innerHTML = '';

    imagesArray.forEach(function (image, index) {
      const thumbnail = document.createElement('div');
      thumbnail.classList.add('thumbnail');
      thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail ${index+1}">`;
      thumbnail.addEventListener('click', function (event) {
        event.stopPropagation();
        changeSlide(index);
      });
      thumbnailsContainer.appendChild(thumbnail);
    });

    if (imagesArray.length > 0) {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      slide.innerHTML = `<img src="${imagesArray[currentSlideIndex]}" alt="Slide">`;
      slider.appendChild(slide);

      showSlide(currentSlideIndex);
    }
  }

  function showSlide(index) {
    const slider = document.querySelector('.modal-content .slider');
    const slides = slider.querySelectorAll('.slide');

    if (index >= 0 && index < slides.length) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
  }

  function changeSlide(index) {
    currentSlideIndex = index;
    updateSlider();
  }

  document.querySelectorAll('.projects__block').forEach(function (block) {
    block.querySelector("#projects_button, .projects__block-img").addEventListener('click', function () {
      imagesArray = [];
      currentSlideIndex = 0;
      projectBlock = block;
      updateImagesArray();
      updateModalTitle();
      // console.log(imagesArray);
      // console.log(document.querySelector('.modal-content .slider .slide img'));
      document.querySelector('.modal').classList.add('active');
    });
  });

  document.querySelector(".modal").addEventListener('click', function (event) {
    const modalContent = document.querySelector('.modal-container .modal-content');
    if (!modalContent.contains(event.target) && !event.target.classList.contains('modal-content')) {
      imagesArray = [];
      currentSlideIndex = 0;
      document.querySelector('.modal').classList.remove('active');
    }
  });
});
