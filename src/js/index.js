import '../styles/vendors.scss';
import '../styles/styles.scss';

const names = [];
const selectorMode = document.getElementById('selectorMode');
const ulList = document.querySelector('.names-list__list');

selectorMode.addEventListener('change', () => {
  const darkMode = document.getElementById('selectorMode').checked;
  const html = document.querySelector('html');
  html.dataset.bsTheme = darkMode ? 'dark' : 'light';
})

function addName(name) {
  const list = document.querySelector('.names-list');

  list.classList.remove('d-none');
  names.push(name);
  enableBtn(amountValue() <= names.length);
  printNames(name, names.length - 1);
}

function printNames(name, index) {
  const li = document.createElement("li");
  const content = document.createElement("div");
  const deleteItem = document.createElement("a");

  deleteItem.innerHTML = '<i class="bi bi-person-x p-1"></i>';
  deleteItem.title = 'Excluir';
  deleteItem.classList.add('names-list__link', 'text-danger', 'ps-2');
  deleteItem.dataset.index = index;
  deleteItem.addEventListener("click", deleteName);

  content.classList.add('names-list__item', 'd-flex', 'align-items-center', 'justify-content-between', 'py-2');
  content.appendChild(document.createTextNode(name));
  content.appendChild(deleteItem);

  li.appendChild(content);
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

function deleteName() {
  names.splice(this.dataset.index, 1);
  ulList.innerHTML = '';
  printResult('clear');
  enableBtn(amountValue() <= names.length);

  if (names.length > 0) {
    names.map((item, index) => {
      printNames(item, index);
    })
  }
}

function amountValue() {
  return parseInt(document.getElementById('amount').value);
}

function randomNumbers(max) {
  return Math.floor(Math.random() * max);
}

function uniqueNumber(number, history) {
  if (!history.includes(number)) return number;
  const newNumber = randomNumbers(names.length);
  return history.includes(newNumber) ? uniqueNumber(newNumber, history) : newNumber;
}

function printResult(type, text = '') {
  const result = document.querySelector('.result__box');
  const resultIcon = document.querySelector('.result__icon');
  const resultText = document.querySelector('.result__text');

  resultText.innerHTML = text;

  if (type === 'success') {
    result.classList.remove('alert-danger', 'p-0');
    result.classList.add('alert-success');
    resultIcon.classList.remove('d-none');
  } else if (type === 'error') {
    result.classList.remove('alert-success', 'p-0');
    result.classList.add('alert-danger');
    resultIcon.classList.add('d-none');
  } else {
    result.classList.add('p-0');
    result.classList.remove('alert-success', 'alert-danger');
    resultIcon.classList.add('d-none');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const amount = document.getElementById('amount');
  const buttonAddName = document.getElementById('button-add');
  const btnPrizeDraw = document.getElementById('prizeDraw');
  const currentYear = document.querySelector('.current-year');
  const inputName = document.getElementById('name');
  const validation = document.querySelector('.invalid-feedback');

  inputName.addEventListener("keyup", function (event) {
    const hasName = validationName(this.value.trim(), true);

    if (hasName) {
      validation.classList.add('d-block');
    } else {
      validation.classList.remove('d-block');
    }

    if (event.key === "Enter" && this.value.length > 0) {
      event.preventDefault();
      validationName(this.value.trim());
    }
  })

  buttonAddName.addEventListener('click', function (event) {
    event.preventDefault();
    validationName(inputName.value.trim());
  })

  amount.addEventListener('change', function () {
    enableBtn(amountValue() <= names.length);
  })
  amount.addEventListener('keyup', function () {
    enableBtn(amountValue() <= names.length);
  })

  btnPrizeDraw.addEventListener('click', function () {
    if (names.length === 0) {
      printResult('error', 'Digite pelo menos um nome.');
    } else if (amountValue() <= 0 || amountValue() === '') {
      printResult('error', 'Digite uma quantidade de nomes para sortear válida.');
    } else if (amountValue() > names.length) {
      printResult('error', 'A quantidade de nomes para sortear é maior do que a quantidade de nomes inseridos.');
    } else {
      const indexHistory = [];
      const index = randomNumbers(names.length);
      let text = '';

      if (amountValue() === 1) {
        indexHistory.push(index);
        text += names[randomNumbers(names.length)];
      } else {
        for (let i = 0; i < amountValue(); i++) {
          const newIndex = uniqueNumber(index, indexHistory)
          indexHistory.push(newIndex);
          text += i === 0 ? `${i + 1} - ${names[newIndex]}` : `<br /> ${i + 1} - ${names[newIndex]}`;
        }
      }
      printResult('success', text);
    }
  })

  currentYear.innerHTML = new Date().getFullYear();

  function validationName(newName, onlyCheck = false) {
    const includesValue = names.some(name => {
      return name.toLowerCase() === newName.toLowerCase();
    });

    if (onlyCheck) return includesValue;

    if (includesValue) {
      validation.classList.add('d-block')
    } else {
      addName(newName);
      inputName.value = '';
    }
    inputName.focus();
  }
})
