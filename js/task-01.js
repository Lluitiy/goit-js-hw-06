// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в
// ul#categories, то есть элементов li.item.
const listCategories = document.querySelectorAll('h2');
console.log('Number of categories:', listCategories);

function totalListCategories(params) {
    let array = [];

    for (const el of params) {
        array.push(el.textContent)
    }
    return array.length;
//   params.forEach(el => el.textContent);
}
totalListCategories(listCategories);
console.log('Number of categories:', totalListCategories(listCategories));

// Для каждого элемента li.item в списке
// ul#categories, найдет и выведет в консоль текст

// const categoryNames = document.querySelectorAll('.item');
// console.log(categoryNames);
// заголовка элемента(тега < h2 >) и количество элементов
// в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


//!! ПОЧЕМУ РАБОТАЕТ С ФОР ОФОМ А С ФОРЫЧЕМ НЕТ ?????????????????????????????????
//??
// function textoviyElement(params) {
//   params.forEach(el => el.params.texContent);
// }
// textoviyElement(document.querySelectorAll('h2'));
// console.log(
//   textoviyElement(document.querySelectorAll('h2'))
// );
// console.log(textoviyElement(listCategories));
//??
//!!
// const numberOfCategories = params => params.forEach((el, index, array) => array.length);
// console.log('Number of categories:', numberOfCategories(listCategories));
// numberOfCategories(listCategories);


