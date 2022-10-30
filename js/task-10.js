const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
let boxes = document.querySelector('#boxes')

createBtn.addEventListener('click', getInputValue)
destroyBtn.addEventListener('click', destroyBoxes)

function getInputValue() {
  const inputValue = document.querySelector('#controls input').value;
  createBoxes(inputValue);
}

function createBoxes(inputValue) {
  let arr = [];
  const size = 30;
  for (let i = 0; i < inputValue; i+=1) {
    const div = document.createElement("div");
    const divSize = size + i * 10;
    const divColor = getRandomHexColor();
    
    div.style.cssText = `width: ${divSize}px;
    height: ${divSize}px;
    background-color: ${divColor};`;

    arr.push(div);
  }
  boxes.append(...arr);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}