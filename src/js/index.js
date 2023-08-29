import '../styles/vendors.scss';
import '../styles/styles.scss';

const selectorMode = document.getElementById('selectorMode');
const names = [];

selectorMode.addEventListener('change', () => {
  const darkMode = document.getElementById('selectorMode').checked;
  const html = document.querySelector('html');
  html.dataset.bsTheme = darkMode ? 'dark' : 'light';
})

function addName(name) {
  const list = document.querySelector('.names-list');

  list.classList.remove('d-none');
  names.push(name);
  enableBtn(true);
  printNames(name);
}

function printNames(name) {
  const ulList = document.querySelector('.names-list__list');
  const li = document.createElement("li");

  li.appendChild(document.createTextNode(name));
  ulList.appendChild(li);
}

function enableBtn(enable) {
  const btnPrizeDraw = document.getElementById('prizeDraw');
  if (enable) {
    btnPrizeDraw.classList.remove('disabled')
  } else {
    btnPrizeDraw.classList.add('disabled')
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const buttonAddName = document.getElementById('button-add');
  const inputName = document.getElementById('name');

  inputName.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && this.value.length > 0) {
      event.preventDefault();
      addName(this.value.trim())
      this.value = '';
    }
  })

  buttonAddName.addEventListener('click', function (event) {
    event.preventDefault();
    addName(inputName.value.trim())
    inputName.value = '';
    inputName.focus();
  })

  const btnPrizeDraw = document.getElementById('prizeDraw');
  const result = document.querySelector('.result__box');
  const resultText = document.querySelector('.result__text');
  const resultIcon = document.querySelector('.result__icon');

  btnPrizeDraw.addEventListener('click', function () {
    const amount = parseInt(document.getElementById('amount').value);

    if (names.length === 0) {
      printError('Digite pelo menos um nome.');
    } else if (amount <= 0 || amount > names.length || amount === '') {
      printError('Digite uma quantidade válida.');
    } else {
      result.classList.remove('alert-danger', 'p-0');
      result.classList.add('alert-success');
      resultIcon.classList.remove('d-none');
      resultText.textContent = '';

      if (amount === 1) {
        const index = Math.floor(Math.random() * names.length);
        resultText.textContent += names[index];
      } else {
        for (let i = 0; i < amount; i++) {
          const index = Math.floor(Math.random() * names.length);
          if (i === 0) {
            resultText.textContent += names[index];
          } else {
            resultText.textContent += `, ${names[index]}`;
          }
        }
      }
    }
  })

  function printError(text) {
    result.classList.remove('alert-success', 'p-0');
    result.classList.add('alert-danger');
    resultIcon.classList.add('d-none');
    resultText.textContent = text;
  }
})
