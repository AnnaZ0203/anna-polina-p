document.addEventListener('DOMContentLoaded', function () {
  const guessingInput = document.querySelector('.guessing-game-input');
  const guessingButton = document.querySelector('.guessing-game-button');
  const guessingResult = document.querySelector('.guessing-game-result');

  let secretNumber = Math.floor(Math.random() * 100) + 1;

  guessingButton.addEventListener('click', function () {
    const userGuess = parseInt(guessingInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      guessingResult.textContent = 'Будь ласка, введіть число від 1 до 100';
      guessingResult.style.color = 'red';
      return;
    }

    if (userGuess === secretNumber) {
      guessingResult.textContent = `Вітаю, ви вгадали число! (${secretNumber})`;
      guessingResult.style.color = 'green';

      // Генеруємо нове число для наступної гри
      setTimeout(() => {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        guessingResult.textContent = 'Компютер загадав нове число від 1 до 100';
        guessingResult.style.color = 'blue';
        guessingInput.value = '';
      }, 2000);
    } else if (userGuess < secretNumber) {
      guessingResult.textContent = 'Спробуйте більше число';
      guessingResult.style.color = 'orange';
    } else {
      guessingResult.textContent = 'Спробуйте менше число';
      guessingResult.style.color = 'orange';
    }
  });

  guessingInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      guessingButton.click();
    }
  });
});
