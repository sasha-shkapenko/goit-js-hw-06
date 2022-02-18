// 1 Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2 Добавит название ингредиента как его текстовое содержимое.
// 3 Добавит элементу класс item.
// 4 После чего вставит все <li> за одну операцию в список ul.ingredients.
const list = document.querySelector("#ingredients");
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map(ingredient => {
  let item = document.createElement('li');
  item.textContent = `${ingredient}`;
  item.classList.add('item');
  return item;
})
list.append(...ingredientsList);



// for (const ingredient of ingredients) {
//   let item = document.createElement('li');
//   item.textContent = `${ingredient}`;
//   item.classList.add('item');
//   list.append(item);
// }


  

