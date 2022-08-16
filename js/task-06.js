//todo Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//проверяет его содержимое на правильное количество введённых символов.

//todo Сколько символов должно быть в инпуте, указывается в его атрибуте
//data - length.
//todoЕсли введено подходящее количество символов, то border инпута становится
//зелёным, если неправильное - красным.

//todo Для добавления стилей, используй CSS-классы valid и invalid, которые
//мы уже добавили в исходные файлы задания.

// function onInputChange(event) {
//   const inputValue = event.currentTarget.value;
//   console.log(inputValue);

//   inputEl.addEventListener('blur', () => {
//     if (inputValue.textContent.length > 0) {
//       inputEl.style.borderColor = 'green';
//     }

//     inputEl.style.borderColor = 'red';
//   });
// }


const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;
console.log(inputLength);


inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
  const text = event.currentTarget.value
  console.log(text)

  inputEl.classList.remove('valid', 'invalid');
  if (text.length === Number(inputLength)) {
    inputEl.classList.add('valid')
  } else {
    inputEl.classList.add('invalid');
  }
}