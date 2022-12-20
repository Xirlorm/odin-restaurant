'use strict'

import foodData from '../data.json5'

export default function gotoHome() {
  const main = document.getElementsByTagName('main')[0]
  main.innerText = ''

  const homeInfo = [
    "For us, it's not just a food. It's a quality, a quantity and the unforgetable tastes that comes with it.\
     consectetur adipiscing elit duis tristique. Risus nullam eget felis eget nunc lobortis mattis. Scelerisque felis.",

    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore \
     magna aliqua. Elementum eu facilisis sed odio morbi quis commodo. Neque viverra justo nec ultrices dui sapien \
     eget mi. Purus gravida quis blandit turpis. Lectus quam id leo in vitae. Ut sem viverra aliquet eget sit amet tellus cras.",

    "At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum leo vel orci porta non pulvinar neque laoreet.\
     Sociis natoque penatibus et magnis. Nibh sit amet commodo nulla. Id venenatis a condimentum vitae sapien pellentesque. \
    Quis varius quam quisque id diam vel quam. Turpis massa tincidunt dui ut ornare lectus sit. Lorem ipsum dolor sit amet."
  ]

  for (let i = 0; i < ((foodData.menu.length > 3) ? 3 : foodData.length); ++i) {
    const image = new Image()
    image.src = require(`../images/${foodData.menu[i].image}`)
    image.classList.add('home-image')

    const p = document.createElement('p')
    const brief = document.createElement('p')
    brief.style.maxWidth = '400px'
    brief.classList.add('home-info')
    main.appendChild(p)

    if (i % 2) {
      p.classList.add('home-container')

      brief.textContent = homeInfo[i]
      p.appendChild(brief)
      p.appendChild(image)
      continue
    }
    p.appendChild(image)
    p.classList.add('home-container')

    brief.textContent = homeInfo[i]
    p.appendChild(brief)
  }
}
