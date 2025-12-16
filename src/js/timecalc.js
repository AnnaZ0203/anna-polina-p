const time = document.querySelector('.time');
const input = time.querySelector('.input');
const btn = time.querySelector('.btn');
const result = time.querySelector('.result');

btn.addEventListener('click', () => {
  const s = Number(input.value);

  if (!s) {
    result.textContent = 'Введи секунди';
    return;
  }

  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  result.textContent = `${h}г ${m}хв ${sec}с`;
});
