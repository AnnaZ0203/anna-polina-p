document.addEventListener('DOMContentLoaded', function () {
  const jumpButton = document.querySelector('.dino-jump-button');
  const duckButton = document.querySelector('.dino-duck-button');
  const startButton = document.querySelector('.dino-start-button');
  const scoreValue = document.querySelector('.dino-stats .score-value');
  const highScoreValue = document.querySelector(
    '.dino-stats .high-score-value'
  );

  let score = 0;
  let highScore = localStorage.getItem('dinoHighScore') || 0;
  let gameRunning = false;

  highScoreValue.textContent = highScore;

  startButton.addEventListener('click', function () {
    gameRunning = true;
    score = 0;
    scoreValue.textContent = score;
    startButton.disabled = true;

    const gameInterval = setInterval(() => {
      if (gameRunning) {
        score += 10;
        scoreValue.textContent = score;

        //Best resultat
        if (score > highScore) {
          highScore = score;
          highScoreValue.textContent = highScore;
          localStorage.setItem('dinoHighScore', highScore);
        }
      }
    }, 500);

    //Stop after 30mins
    setTimeout(() => {
      clearInterval(gameInterval);
      gameRunning = false;
      startButton.disabled = false;
    }, 30000);
  });

  jumpButton.addEventListener('click', function () {
    if (gameRunning) {
      console.log('Динозавр стрибає!');
      //jump
    }
  });

  duckButton.addEventListener('click', function () {
    if (gameRunning) {
      console.log('Динозавр присідає!');
      //sit
    }
  });

  //управляємо
  document.addEventListener('keydown', function (e) {
    if (!gameRunning) return;

    switch (e.code) {
      case 'Space':
        jumpButton.click();
        break;
      case 'ArrowDown':
        duckButton.click();
        break;
    }
  });
});
