document.addEventListener('DOMContentLoaded', function () {
  const numberInputs = document.querySelectorAll('.number-input');
  const findMaxButton = document.querySelector('.find-max-button');
  const maxNumberValue = document.querySelector('.max-number-value');

  findMaxButton.addEventListener('click', function () {
    const numbers = [];

    // allnums
    numberInputs.forEach(input => {
      const value = parseFloat(input.value);
      if (!isNaN(value)) {
        numbers.push(value);
      }
    });

    //check amount
    if (numbers.length < 3) {
      maxNumberValue.textContent = 'помилка';
      maxNumberValue.style.color = 'red';
      alert('Будь ласка, введіть всі 3 числа!');
      return;
    }

    // max numm
    const maxNumber = Math.max(...numbers);
    maxNumberValue.textContent = maxNumber;
    maxNumberValue.style.color = '#28a745';

    numberInputs.forEach(input => {
      input.style.backgroundColor = '#fff';
      input.style.borderColor = '#ddd';
      if (parseFloat(input.value) === maxNumber) {
        input.style.backgroundColor = '#d4edda';
        input.style.borderColor = '#28a745';
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
