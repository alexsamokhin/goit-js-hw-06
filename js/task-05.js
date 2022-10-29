const inputText = document.querySelector('#name-input')
const outputText = document.querySelector('#name-output')

inputText.addEventListener('input', (event) => {
    console.log(inputText.value)
    if (inputText.value === '') {
        outputText.textContent = 'Anonymous'
    } else {
        outputText.textContent = event.currentTarget.value
    }
})