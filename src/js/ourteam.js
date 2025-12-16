document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.team-slider');
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-arrow-prev');
  const nextBtn = document.querySelector('.slider-arrow-next');
  const dots = document.querySelectorAll('.dot');

  let currentSlide = 0;
  const slideWidth = slides[0].offsetWidth;
  const totalSlides = slides.length;

  function initSlider() {
    sliderTrack.style.width = `${slideWidth * totalSlides}px`;

    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);
    dots.forEach(dot => {
      dot.addEventListener('click', function () {
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        goToSlide(slideIndex);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        showPrevSlide();
      } else if (e.key === 'ArrowRight') {
        showNextSlide();
      }
    });

    updateSlider();
  }

  function showPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }

  function updateSlider() {
    const offset = -currentSlide * slideWidth;
    sliderTrack.style.transform = `translateX(${offset}px)`;
    sliderTrack.style.transition = 'transform 0.5s ease';

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });

    prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
    nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
  }

  window.addEventListener('resize', function () {
    const newSlideWidth = slides[0].offsetWidth;
    sliderTrack.style.width = `${newSlideWidth * totalSlides}px`;

    const offset = -currentSlide * newSlideWidth;
    sliderTrack.style.transform = `translateX(${offset}px)`;
  });

  initSlider();
});
