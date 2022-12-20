'use strict'

import foodData from '../data.json5'

export default function gotoMenu() {
  const main = document.getElementsByTagName('main')[0]
  main.textContent = ''

  const title = document.createElement('h2')
  title.innerHTML = "\" It's not just about eating good food. \
  It's about making unforgettable memories with your taste buds. "
  title.classList.add('theme')
  main.appendChild(title)

  const catalog = document.createElement('section')
  catalog.classList.add('catalog')

  foodData.menu.forEach((food) => {
    const item = document.createElement('p')
    item.classList.add('food-list-item')

    const foodLabel = document.createElement('div')
    foodLabel.classList.add('food-label')

    const foodImage = new Image()
    foodImage.src = require('../images/' + food.image)
    foodImage.classList.add('food-image')
    item.appendChild(foodImage)

    const foodName = document.createElement('h4')
    foodName.classList.add('food-name')
    foodName.textContent = food.name
    foodLabel.appendChild(foodName)

    const foodPrice = document.createElement('div')
    foodPrice.classList.add('food-price')
    foodPrice.textContent = `$${food.price}`
    foodLabel.appendChild(foodPrice)

    if (food.discount > 0) {
      foodPrice.classList.add('original-price')
      const discount = document.createElement('div')
      discount.classList.add('discount')
      const price = Number(food.price)
      discount.textContent = '$' + (price - ((price / 100) * Number(food.discount))).toFixed(2)
      foodLabel.appendChild(discount)
    }
    item.appendChild(foodLabel)
    catalog.appendChild(item)
  })
  main.appendChild(catalog)
}
