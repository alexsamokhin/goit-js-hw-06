const textInput = document.querySelector("#validation-input")


const makeBlur = (evt) => {
    if (evt.currentTarget.value.length === Number(textInput.dataset.length)) {
        textInput.classList.remove('invalid')
        textInput.classList.add('valid')
    } else {
        textInput.classList.add('invalid')
        textInput.classList.remove('valid')
    }
}

textInput.addEventListener('blur', makeBlur)