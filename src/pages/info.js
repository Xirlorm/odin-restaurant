import '../style.css';

export default function info() {
  const addressInfo =  [ 
    'Gourment Chef',
    'visit us at: example.com.gh',
    'email:  example@gmail.com',
    'Box 000, Exa Example',
    'United Example Republic'
  ]

  const main = document.getElementsByTagName('main')[0];
  main.textContent = '';

  const address = document.createElement('address');
  for (let info of addressInfo) {
    let li = document.createElement('li');
    li.textContent = info;
    address.appendChild(li);
  }

  main.appendChild(address);
  
}

