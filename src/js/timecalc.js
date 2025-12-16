document.addEventListener('DOMContentLoaded', function () {
  const secondsInput = document.querySelector('.time-calc-input');
  const timeCalcButton = document.querySelector('.time-calc-button');
  const timeResultDisplay = document.querySelector('.time-result-display');

  timeCalcButton.addEventListener('click', function () {
    const totalSeconds = parseInt(secondsInput.value);

    if (isNaN(totalSeconds) || totalSeconds < 0) {
      timeResultDisplay.textContent =
        'Будь ласка, введіть правильне число секунд';
      timeResultDisplay.style.color = 'red';
      return;
    }

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let result = '';
    if (days > 0) {
      result += `${days} дн. `;
    }

    result += `${hours.toString().padStart(2, '0')}:`;
    result += `${minutes.toString().padStart(2, '0')}:`;
    result += `${seconds.toString().padStart(2, '0')}`;

    timeResultDisplay.textContent = result;
    timeResultDisplay.style.color = 'green';
  });

  secondsInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      timeCalcButton.click();
    }
  });
});
