let counterValue = document.querySelector('#value');
let counter = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

decrementBtn.addEventListener('click', () => {
    counter -= 1
    counterValue.textContent = counter
})

incrementBtn.addEventListener('click', () => {
    counter += 1
    counterValue.textContent = counter
})