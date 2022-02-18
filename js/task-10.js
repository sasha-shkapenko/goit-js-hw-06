function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', appendBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes)

function appendBoxes() {
  const amountOfBoxes = createBoxes(inputEl.value);
  divEl.append(...amountOfBoxes);
}

function createBoxes(amount) {
  let divTagsArr = [];
  
  for (let i = 0; i < amount; i++){
    const boxEl = document.createElement('div');
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = `${30 + i * 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    divTagsArr.push(boxEl);
  }
  return divTagsArr;
}

function destroyBoxes() {
  divEl.innerHTML = '';
}
