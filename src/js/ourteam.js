document.addEventListener('DOMContentLoaded', function () {
  const memberNameInput = document.querySelector('.member-name-input');
  const saveNameButton = document.querySelector('.save-name-button');
  const workInfoTextarea = document.querySelector('.work-info-textarea');
  const saveWorkButton = document.querySelector('.save-work-button');
  const currentNameDisplay = document.querySelector('.current-name');
  const currentWorkDisplay = document.querySelector('.current-work');

  const savedName = localStorage.getItem('teamMemberName') || 'Не вказано';
  const savedWork = localStorage.getItem('teamMemberWork') || 'Не вказано';

  currentNameDisplay.textContent = savedName;
  currentWorkDisplay.textContent = savedWork;

  if (savedName !== 'Не вказано') {
    memberNameInput.value = savedName;
  }
  if (savedWork !== 'Не вказано') {
    workInfoTextarea.value = savedWork;
  }

  saveNameButton.addEventListener('click', function () {
    const name = memberNameInput.value.trim();

    if (name === '') {
      alert("Будь ласка, введіть ім'я студента");
      return;
    }

    currentNameDisplay.textContent = name;
    localStorage.setItem('teamMemberName', name);
    alert("Ім'я збережено успішно!");
  });

  saveWorkButton.addEventListener('click', function () {
    const workInfo = workInfoTextarea.value.trim();

    if (workInfo === '') {
      alert('Будь ласка, введіть інформацію про роботу');
      return;
    }

    currentWorkDisplay.textContent = workInfo;
    localStorage.setItem('teamMemberWork', workInfo);
    alert('Інформація про роботу збережена успішно!');
  });

  memberNameInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      saveNameButton.click();
    }
  });
});
