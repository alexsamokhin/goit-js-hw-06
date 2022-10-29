const itemList = document.querySelectorAll('.item')
console.log(`Number of categories: ${itemList.length}`)
for (let i = 0; i < itemList.length; i+=1) {
    console.log(`Category: ${itemList[i].querySelector('h2').textContent}`)
    console.log(`Elements: ${itemList[i].querySelectorAll('li').length}`)
}
