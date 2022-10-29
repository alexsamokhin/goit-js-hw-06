const fontCtrl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

fontCtrl.addEventListener('input', () => {
    text.style.fontSize = `${Number(fontCtrl.value)}px`
})
