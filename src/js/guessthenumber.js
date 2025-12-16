const guess = document.querySelector('.guess');
const input = guess.querySelector('.input');
const btn = guess.querySelector('.btn');
const result = guess.querySelector('.result');

const rnd = Math.floor(Math.random() * 10) + 1;

btn.addEventListener('click', () => {
  const val = Number(input.value);

  if (!val) {
    result.textContent = 'Введи число';
    return;
  }

  result.textContent = val === rnd ? 'Ти вгадав!' : `Не вгадав Було ${rnd}`;
});
