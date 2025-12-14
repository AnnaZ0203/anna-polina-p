'use strict';

let ball = document.getElementById('ball');
let arrow = document.getElementById('arrow');
let text = document.getElementById('football-result');

let x = field.clientWidth / 2 - ball.offsetWidth / 2;
let y = field.clientHeight / 2 - ball.offsetHeight / 2;

ball.style.left = x + 'px';
ball.style.top = y + 'px';
