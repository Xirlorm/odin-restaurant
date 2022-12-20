import gotoHome from './pages/home.js'
import gotoMenu from './pages/menu.js'
import gotoInfo from './pages/contact-info.js'
import './styles/style.css'

const container = document.getElementById('container')

// Create tab
const tab = document.createElement('header')

const brandName = document.createElement('h1')
brandName.innerText = '`Food·ian'
brandName.addEventListener('click', gotoHome)
tab.appendChild(brandName)

const nav = document.createElement('nav')

const homeBtn = document.createElement('li')
const menuBtn = document.createElement('li')
const infoBtn = document.createElement('li')

homeBtn.innerText = 'Home'
menuBtn.innerText = 'Catalog'
infoBtn.innerText = 'Contact'

homeBtn.addEventListener('click', gotoHome)
menuBtn.addEventListener('click', gotoMenu)
infoBtn.addEventListener('click', gotoInfo)

nav.appendChild(homeBtn)
nav.appendChild(menuBtn)
nav.appendChild(infoBtn)
tab.appendChild(nav)

container.appendChild(tab)

// Render initial page
const main = document.createElement('main')
container.appendChild(main)

gotoHome()

// Footer
const footer = document.createElement('footer')
footer.innerHTML = "<div>Images from Ginterest<\div>\
  <div>Fonts from Google<\div>"
container.appendChild(footer)
