'use strict'

export default function gotoInfo() {
  const main = document.getElementsByTagName('main')[0]
  main.textContent = ''

  const title = document.createElement('h2')
  title.classList.add('contact-info')
  title.textContent = 'Contact us?'
  main.append(title)

  let contacts = [
    {
      name: 'Robert not Funny',
      title: 'Manager',
      email: 'robby@mil.co',
      phone: 'f32-i38-u64'
    },
    {
      name: 'Nick Jones',
      title: 'Customer Service',
      email: 'foodian@err.uo',
      phone: 'f64-i32-u64'
    },
    {
      name: 'Ro de ceuz',
      title: 'Chef',
      email: 'ro@mil.co',
      phone: 'f32-i16-u32'
    }
  ]

  contacts.forEach((contact) => {
    const card = document.createElement('p')
    card.classList.add('contact-card')
    const name = document.createElement('h3')
    name.textContent = contact.name
    card.appendChild(name)
    const title = document.createElement('div')
    title.innerText = contact.title
    card.appendChild(title)
    const email = document.createElement('div')
    email.innerText = contact.email
    card.appendChild(email)
    const phone = document.createElement('div')
    phone.innerText = contact.phone
    card.appendChild(phone)
    main.appendChild(card)
  })
}

