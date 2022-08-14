const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },

    decrement() {
        this.counterValue -= 1;
    },
}

const value = document.querySelector('#value')
value.style.color = "yellow"
const decrement = document.querySelector('[data-action="decrement"]');
decrement.style.borderRadius = "50%";
decrement.style.backgroundColor = 'tomato';
decrement.style.borderColor = 'red';
const increment = document.querySelector('[data-action="increment"]');
increment.style.borderRadius = '50%';
increment.style.backgroundColor = 'yellowgreen';
increment.style.borderColor = 'green';

decrement.addEventListener('click', () => {
    counter.decrement();
    value.textContent = counter.counterValue;
});

increment.addEventListener('click', () => {
    counter.increment();
    value.textContent = counter.counterValue;
});