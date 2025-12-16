document.addEventListener('DOMContentLoaded', function () {
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const operationButtons = document.querySelectorAll('.calc-operation');
  const resultDisplay = document.querySelector('.calc-result-display');

  operationButtons.forEach(button => {
    button.addEventListener('click', function () {
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const operation = this.getAttribute('data-operation');

      if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Будь ласка, введіть обидва числа';
        resultDisplay.style.color = 'red';
        return;
      }

      let result;
      switch (operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          if (num2 === 0) {
            resultDisplay.textContent = 'Помилка: ділення на нуль';
            resultDisplay.style.color = 'red';
            return;
          }
          result = num1 / num2;
          break;
        default:
          result = 'Невідома операція';
      }

      resultDisplay.textContent = result;
      resultDisplay.style.color = 'green';
    });
  });
});
