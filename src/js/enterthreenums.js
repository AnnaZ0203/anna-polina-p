document.addEventListener('DOMContentLoaded', function () {
  const numberInputs = document.querySelectorAll('.number-input');
  const findMaxButton = document.querySelector('.find-max-button');
  const maxNumberValue = document.querySelector('.max-number-value');

  findMaxButton.addEventListener('click', function () {
    const numbers = [];

    numberInputs.forEach(input => {
      const value = parseFloat(input.value);
      if (!isNaN(value)) {
        numbers.push(value);
      }
    });
    if (numbers.length < 3) {
      maxNumberValue.textContent = 'помилка';
      maxNumberValue.style.color = 'red';
      alert('Будь ласка, введіть всі 3 числа!');
      return;
    }

    const maxNumber = Math.max(...numbers);
    maxNumberValue.textContent = maxNumber;
    maxNumberValue.style.color = 'green';

    numberInputs.forEach(input => {
      input.style.backgroundColor = '';
      if (parseFloat(input.value) === maxNumber) {
        input.style.backgroundColor = '#d4edda';
      }
    });
  });

  numberInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        findMaxButton.click();
      }
    });
  });
});
