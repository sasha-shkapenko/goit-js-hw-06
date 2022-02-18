// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

let counterValue = 0;
incBtn.addEventListener('click', () => {
    counterValue++;
    value.textContent = counterValue;
})

decBtn.addEventListener('click', () => {
    counterValue--;
    value.textContent = counterValue;
})
