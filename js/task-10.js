//TODO
/* Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает 
кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.
*/
//TODO

//TODO__________________________________________________________
/*
Создай функцию createBoxes(amount), которая принимает один 
параметр - число. Функция создает столько <div>, 
сколько указано в amount и добавляет их в div#boxes.
*/
//! 1)
/*Размеры самого первого < div > - 30px на 30px.

//! 2)
Каждый элемент после первого, должен быть шире и выше предыдущего
на 10px.

//! 3)
Все элементы должены иметь случайный цвет фона в формате HEX. 
Используй готовую функцию getRandomHexColor для получения цвета.

//! 4)
Создай функцию destroyBoxes(), которая очищает содержимое 
div#boxes, тем самым удаляя все созданные элементы.
*/ //TODO_______________________________________________________

const mainBox = document.querySelector('#boxes');
mainBox.style.display = 'flex';
mainBox.style.gap = '10px';
mainBox.style.flexWrap = 'wrap';
mainBox.style.width = '1200px';

const inputNumber = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const desroyBtn = document.querySelector('[data-destroy]');
console.log('🚀 ~ desroyBtn', desroyBtn);
console.log('🚀 ~ createBtn', createBtn);
console.log('🚀 ~ inputNumber', inputNumber);
console.log('🚀 ~ mainBox', mainBox);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// let colorPicker = getRandomHexColor();

createBtn.addEventListener('click', () => createBoxes(num));

desroyBtn.addEventListener('click', removeBoxes);

inputNumber.addEventListener('input', amount);
console.log('🚀 ~ inputNumber', inputNumber);
let num = 0;
function amount(e) {
  num = Number(e.currentTarget.value);
  console.log(num);
}
// 1. 30x30 2. 40x40 3. 50x50
function createBoxes(amount) {
  const divBoxes = [];
  let counter = 30;

  for (let i = 0; i < amount; i += 1) {
    let newBox = `<div style="
                                width:${counter}px; 
                                height:${counter}px;
                                background-color:${getRandomHexColor()};
                                " ></div>`;
    counter += 10;
    divBoxes.push(newBox);
  }
  mainBox.insertAdjacentHTML('beforeend', divBoxes.join(''));

  // for(let el of amount){
  //   const newBoxes = createBtn.createElement('div');
  //   newBoxes.classlist.add('box')
  //   newBoxes.style.width = `${30 + (el * 10)}px`;
  //   newBoxes.style.height = `${30 + el * 10}px`;
  //   newBoxes.style.backgroundColor = `${getRandomHexColor()}`;
  // };
}

function removeBoxes(evt) {
  mainBox.innerHTML = '';
}
