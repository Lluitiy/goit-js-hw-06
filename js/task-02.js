// Напиши скрипт, который для каждого элемента массива ingredients:

//TODO Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
//TODO После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsEls = ingredients.map(el => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = el;
  ingredientsItem.classList.add('ingredients__item');
  return ingredientsItem;
});

ingredientsList.append(...ingredientsEls);
console.log("🚀 ~ file: task-02.js ~ line 27 ~ ingredientsList", ingredientsList)
