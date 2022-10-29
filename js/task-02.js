const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('#ingredients')
const ingredientsArr = []
for (const ingredient of ingredients) {
  const ingredientList = document.createElement('li')
  ingredientList.textContent = ingredient
  ingredientList.classList.add('item')
  ingredientsArr.push(ingredientList)
}
ingredientsUl.append(...ingredientsArr)
  

