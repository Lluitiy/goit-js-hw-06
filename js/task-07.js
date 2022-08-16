//todo
/* 
Напиши скрипт, который реагирует на изменение значения 
input#font - size - control(событие input) и изменяет инлайн - стиль 
span#text обновляя свойство font - size.В результате при перетаскивании 
ползунка будет меняться размер текста.
*/
//todo

const inputRange = document.querySelector('#font-size-control');
const spanEL = document.querySelector('#text')


inputRange.addEventListener('input', onInputChange);

function onInputChange(event) {
    const size = event.currentTarget.value;
    spanEL.style.fontSize = `${size}px`;
}