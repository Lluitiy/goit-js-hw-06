function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const pEl = document.querySelector('.widget');
const currentColor = document.querySelector('.color');

//todo-----------------------------------------------------

const btn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

btn.addEventListener('click', changeBgColor);

function changeBgColor() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  currentColor.textContent = getRandomHexColor();

//todo-------------------------------------------------------

  btn.style.backgroundColor = `#59c173`;
  btn.style.borderRadius = '4px';
  pEl.style.color = `${getRandomHexColor()}`;
}
