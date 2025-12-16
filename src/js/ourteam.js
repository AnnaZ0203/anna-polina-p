document.addEventListener('DOMContentLoaded', function () {
  // Елементи слайдера
  const slider = document.querySelector('.team-slider');
  const slides = document.querySelectorAll('.team-slide');
  const prevBtn = document.querySelector('.left-btn');
  const nextBtn = document.querySelector('.right-btn');
  const dots = document.querySelectorAll('.dot');

  // Константи
  const SLIDE_WIDTH = 700; // Фіксована ширина слайда
  const TOTAL_SLIDES = slides.length;
  let currentSlide = 0;

  // Ініціалізація
  function initSlider() {
    console.log('Ініціалізація слайдера...');

    // Перевірка елементів
    if (!slider || slides.length === 0) {
      console.error('Елементи слайдера не знайдені');
      return;
    }

    // Встановлюємо ширину слайдера
    slider.style.width = `${SLIDE_WIDTH * TOTAL_SLIDES}px`;

    // Навігація кнопками
    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);

    // Навігація точками
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });

    // Клавіатура
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') showPrevSlide();
      if (e.key === 'ArrowRight') showNextSlide();
    });

    // Оновлюємо початковий стан
    updateSlider();
  }

  // Попередній слайд
  function showPrevSlide() {
    currentSlide = currentSlide === 0 ? TOTAL_SLIDES - 1 : currentSlide - 1;
    updateSlider();
  }

  // Наступний слайд
  function showNextSlide() {
    currentSlide = currentSlide === TOTAL_SLIDES - 1 ? 0 : currentSlide + 1;
    updateSlider();
  }

  // Перейти до слайду
  function goToSlide(index) {
    if (index >= 0 && index < TOTAL_SLIDES) {
      currentSlide = index;
      updateSlider();
    }
  }

  // Оновити слайдер
  function updateSlider() {
    // Розраховуємо зсув
    const offset = -currentSlide * SLIDE_WIDTH;

    // Застосовуємо трансформацію
    slider.style.transform = `translateX(${offset}px)`;

    // Оновлюємо активну точку
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });

    console.log(`Поточний слайд: ${currentSlide + 1}, Зсув: ${offset}px`);
  }

  // Запускаємо слайдер
  initSlider();

  // Тестуємо: примусово показуємо 2-й слайд через 2 секунди
  setTimeout(() => {
    console.log('Тест: перехід до слайду 2');
    goToSlide(1);
  }, 2000);
});
