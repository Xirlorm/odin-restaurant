import hero from './hero.js';
import home from './pages/home.js';
import menu from './pages/menu.js';
import info from './pages/info';
import './style.css';


// Create page hero
hero(
  'Gourment Chef',
  ['Home', 'Menu', 'Info'],
  [  
    home, menu, info
  ],
)

const main = document.createElement('main');
main.textContent = '';
const container = document.getElementById('container');
container.appendChild(main);
home();

