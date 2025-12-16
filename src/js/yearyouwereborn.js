document.addEventListener('DOMContentLoaded', function () {
  const leapYearInput = document.querySelector('.leap-year-input');
  const leapYearButton = document.querySelector('.leap-year-button');
  const leapYearResult = document.querySelector('.leap-year-result');

  leapYearButton.addEventListener('click', function () {
    const year = parseInt(leapYearInput.value);

    if (isNaN(year)) {
      leapYearResult.textContent = 'Будь ласка, введіть правильний рік';
      leapYearResult.style.color = 'red';
      return;
    }

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isLeapYear) {
      leapYearResult.textContent = `Ви народилися у високосний рік!`;
      leapYearResult.style.color = 'green';
    } else {
      leapYearResult.textContent = `${year} - не високосний рік`;
      leapYearResult.style.color = 'blue';
    }
  });

  leapYearInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      leapYearButton.click();
    }
  });
});
