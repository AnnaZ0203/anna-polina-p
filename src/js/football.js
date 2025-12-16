document.addEventListener('DOMContentLoaded', function () {
  const shootButton = document.querySelector('.shoot-button');
  const passButton = document.querySelector('.pass-button');
  const resetButton = document.querySelector('.reset-button');
  const teamScoreValue = document.querySelector('.team-value');
  const opponentScoreValue = document.querySelector('.opponent-value');

  let teamScore = 0;
  let opponentScore = 0;
  let gameActive = true;

  shootButton.addEventListener('click', function () {
    if (!gameActive) return;

    const shotResult = Math.random();

    if (shotResult > 0.4) {
      //60% шансик
      teamScore++;
      teamScoreValue.textContent = teamScore;
      alert('ГОООООЛ! Ваша команда забила!');
    } else {
      alert('Удар відбитий воротарем!');
    }

    setTimeout(opponentTurn, 1000);
  });

  passButton.addEventListener('click', function () {
    if (!gameActive) return;

    const passResult = Math.random();

    if (passResult > 0.2) {
      // 80
      alert('Успішне пасування!');
    } else {
      alert('Пасування перехоплено суперником!');
      setTimeout(opponentTurn, 1000);
    }
  });

  resetButton.addEventListener('click', function () {
    teamScore = 0;
    opponentScore = 0;
    teamScoreValue.textContent = teamScore;
    opponentScoreValue.textContent = opponentScore;
    gameActive = true;
    alert('Гра скинута! Починаємо заново!');
  });

  function opponentTurn() {
    if (!gameActive) return;

    const opponentShot = Math.random();

    if (opponentShot > 0.5) {
      // 50
      opponentScore++;
      opponentScoreValue.textContent = opponentScore;
      alert('Суперник забив гол!');
    }

    //Чек
    if (teamScore >= 5 || opponentScore >= 5) {
      gameActive = false;
      if (teamScore > opponentScore) {
        alert(
          'Ви перемогли! Фінальний рахунок: ' +
            teamScore +
            ' - ' +
            opponentScore
        );
      } else {
        alert(
          'Ви програли! Фінальний рахунок: ' + teamScore + ' - ' + opponentScore
        );
      }
    }
  }
});
