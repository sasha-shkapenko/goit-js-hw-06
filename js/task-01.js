//1 Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//2 Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и 
// количество элементов в категории(всех вложенных в него < li >).

const categorsEl = document.querySelectorAll('li.item');

console.log('Number of categories: ', categorsEl.length);

categorsEl.forEach(itemsList => {
    console.log('Category: ', itemsList.firstElementChild.textContent);
    console.log('Elements: ', itemsList.lastElementChild.children.length);
})

