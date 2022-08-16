//? Напиши скрипт который:
//Посчитает и выведет в консоль количество категорий в
// ul#categories, то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
//текст заголовка элемента(тега < h2 >) и количество элементов
//? в категории(всех вложенных в него < li >).
//TODO Number of categories: 3

const listCategories = document.querySelectorAll('.item').length;
console.log('Number of categories:', listCategories);

const categoryList = document.querySelector('#categories');

//TODO Category: Animals
//TODO Elements: 4

const categoryListAnimal = categoryList.children[0];
const categoryListAnimalHeading = categoryListAnimal.querySelector('h2').textContent;
console.log('Category:', categoryListAnimalHeading);

const categoryListAnimalAmount = categoryListAnimal.querySelectorAll('li').length;
console.log('Elements:', categoryListAnimalAmount);

//TODO Category: Products
//TODO Elements: 3
const categoryListProduct = categoryList.children[1];
const categoryListProductHeading = categoryListProduct.querySelector('h2').textContent;
console.log('Category:', categoryListProductHeading);

const categoryListProductAmount = categoryListProduct.querySelectorAll('li').length;
console.log('Elements:', categoryListProductAmount);

//TODO Category: Technologies
//TODO Elements: 5

const categoryListTechnologies = categoryList.children[2];
const categoryListTechnologiesHeading = categoryListTechnologies.querySelector('h2').textContent;
console.log('Category:', categoryListAnimalHeading);

const categoryListTechnologiesAmount = categoryListTechnologies.querySelectorAll('li').length;
console.log('Elements:', categoryListTechnologiesAmount);


// ! второй вариант 
// const liItemEl = document.querySelectorAll('.item');
// console.log('Number of categories: ${liItemEl.length}');
// console.log(liItemEl);

// liItemEl.forEach(li => {
//   console.log('Category: ', li.querySelector('h2').textContent);
//   console.log('Elements: ', li.querySelectorAll('li').length);
// });
