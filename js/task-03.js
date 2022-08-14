//TODO Напиши скрипт для создания галереи изображений по
//todo массиву данных.В HTML есть список ul.gallery.

//todo Используй массив объектов images для создания элементов
//todo<img> вложенных в <li>. Для создания разметки используй шаблонные
//todo</li>строки и метод insertAdjacentHTML().

//todo Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//todoДобавь минимальное оформление галереи флексбоксами или гридами через CSS классы

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//! наша улка
const imgList = document.querySelector('.gallery');
imgList.style.display = "flex";
imgList.style.flexWrap = 'wrap';
imgList.style.gap = '10px';
imgList.style.listStyleType = "none";


const imgEl = images.map(el => {
  const imgItem = document.createElement('li');
  const imgPhoto = document.createElement('img');
  imgPhoto.src = el.url;
  imgPhoto.alt = el.alt;
  imgPhoto.width = 240;
  imgPhoto.height = 240

  imgItem.append(imgPhoto);
  return imgItem;
})

imgList.append(...imgEl);


// const option = images[0];

// const imgEl = document.createElement('img');
// imgEl.src = option.url;
// imgEl.alt = option.alt;
// imgEl.width = 400;
// imgEl.height = 400;
// imgList.append(imgEl);

// console.log("🚀 ~ file: task-03.js ~ line 32 ~ imgEl", imgEl)
