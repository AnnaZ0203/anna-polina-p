document.addEventListener('DOMContentLoaded', function () {
  const choices = document.querySelectorAll('.rps-choice');
  const roundResult = document.querySelector('.rps-round-result');
  const computerChoiceDisplay = document.querySelector(
    '.computer-choice-display'
  );
  const computerScoreElement = document.querySelector('.computer-score');
  const playerScoreElement = document.querySelector('.player-score');

  const choicesArray = ['камінь', 'ножиці', 'папір'];
  let computerScore = 0;
  let playerScore = 0;

  choices.forEach(choice => {
    choice.addEventListener('click', function () {
      const playerChoice = this.getAttribute('data-choice');
      const computerChoice = choicesArray[Math.floor(Math.random() * 3)];

      computerChoiceDisplay.textContent = computerChoice;

      let result = '';

      if (playerChoice === computerChoice) {
        result = 'Нічия!';
        roundResult.style.color = 'gray';
      } else if (
        (playerChoice === 'камінь' && computerChoice === 'ножиці') ||
        (playerChoice === 'ножиці' && computerChoice === 'папір') ||
        (playerChoice === 'папір' && computerChoice === 'камінь')
      ) {
        result = 'Ви виграли раунд!';
        roundResult.style.color = 'green';
        playerScore++;
        playerScoreElement.textContent = playerScore;
      } else {
        result = "Комп'ютер виграв раунд";
        roundResult.style.color = 'red';
        computerScore++;
        computerScoreElement.textContent = computerScore;
      }

      roundResult.textContent = result;
    });
  });
});
