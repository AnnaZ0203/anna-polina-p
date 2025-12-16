const dino = document.querySelector('.dino');
const player = dino.querySelector('.player');
const obstacle = dino.querySelector('.obstacle');

let isJumping = false;

document.addEventListener('keydown', e => {
  if (e.code === 'Space' && !isJumping) {
    jump();
  }
});

function jump() {
  isJumping = true;
  player.classList.add('jump');

  setTimeout(() => {
    player.classList.remove('jump');
    isJumping = false;
    isJumping = false;
  }, 500);
}

// collision check
setInterval(() => {
  const playerTop = player.getBoundingClientRect().top;
  const obstacleLeft = obstacle.getBoundingClientRect().left;
  const playerLeft = player.getBoundingClientRect().left;

  if (
    obstacleLeft < playerLeft + 40 &&
    obstacleLeft > playerLeft &&
    playerTop > 300
  ) {
    alert('Game Over');
    location.reload();
  }
}, 10);
