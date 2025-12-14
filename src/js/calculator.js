'use strict';

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('calc-result');

let znak = '';

document.getElementById('plus').onclick = function () {
  znak = '+';
};

document.getElementById('minus').onclick = function () {
  znak = '-';
};

document.getElementById('mult').onclick = function () {
  znak = '*';
};

document.getElementById('div').onclick = function () {
  znak = '/';
};

document.getElementById('eq').onclick = function () {
  let a = Number(num1.value.trim);
  let b = Number(num2.value);
  let r = 0;
  console.log(a);
  if (znak == '+') {
    return (r = a + b);
  }

  if (znak == '-') {
    r = a - b;
  }

  if (znak == '*') {
    r = a * b;
  }

  if (znak == '/') {
    if (b == 0) {
      result.textContent = 'На 0 не можна ділити!';
      return;
    }
    r = a / b;
  }

  result.textContent = 'Результат: ' + r;
};
