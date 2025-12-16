var guess=document.querySelector(".guess"),input=guess.querySelector(".input"),btn=guess.querySelector(".btn"),result=guess.querySelector(".result"),rnd=Math.floor(10*Math.random())+1;btn.addEventListener("click",(function(){var e=Number(input.value);result.textContent=e?e===rnd?"Ти вгадав!":"Не вгадав Було ".concat(rnd):"Введи число"}));
//# sourceMappingURL=index.be1cd4a8.js.map
