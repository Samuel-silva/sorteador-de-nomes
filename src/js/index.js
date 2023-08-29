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
  printNames(name);
}

function printNames(name) {
  const ulList = document.querySelector('.names-list__list');
  const li = document.createElement("li");

  li.appendChild(document.createTextNode(name));
  ulList.appendChild(li);
}

document.addEventListener('DOMContentLoaded', function () {
  const buttonAddName = document.getElementById('button-add');
  const inputName = document.getElementById('name');

  inputName.addEventListener("keypress", function(event) {
    this.value;
    if (event.key === "Enter") {
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

  // const textarea = document.getElementById('nomes');
  // const sortearButton = document.getElementById('sortear');
  // const resultado = document.getElementById('resultado');

  // sortearButton.addEventListener('click', function () {
  //   const nomes = textarea.value.trim().split('\n');
  //   const amount = parseInt(document.getElementById('amount').value);

  //   if (nomes.length === 0) {
  //     resultado.textContent = 'Digite pelo menos um nome.';
  //   } else if (amount <= 0 || amount > nomes.length || amount === '') {
  //     resultado.textContent = 'Digite uma quantidade válida.';
  //   } else {
  //     resultado.textContent = '';

  //     for (let i = 0; i < amount; i++) {
  //       if (nomes.length === 0) break;
  //       const index = Math.floor(Math.random() * nomes.length);
  //       resultado.textContent += nomes[index];
  //       if (i < amount - 1) resultado.textContent += ', ';
  //       nomes.splice(index, 1);
  //     }
  //   }
  // });
});