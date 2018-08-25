import './scss/style.scss'

let componentHero = function(content){
  const hero = document.createElement('div')
  hero.classList.add('hero')
  hero.innerHTML = `
    <span><h1>${content}</h1></span>
  `
  return hero
}

let componentNav = function(){
  const nav = document.createElement('nav')
  nav.innerHTML = `
    <ul>
      <li>
        <a href="#" data-section="about">
          About
        </a>
      </li>
      <li>
        <a href="#" data-section="info">
          Info
        </a>
      </li>
      <li>
        <a href="#" data-section="contact">
          Contact
        </a>
      </li>
    </ul>
  `
  return nav
}

let componentSection = function(section, content){
  const element = document.createElement('section')
  element.innerHTML = `
  <h2>${section}</h2>
  <p>${content}</p>
  `
  return element
}

const contents = [
  {
    section: 'About',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores iure accusamus, veniam natus molestiae sequi laboriosam perspiciatis porro unde fugiat velit repellendus sed exercitationem maiores, dolorem ad culpa! Saepe, nemo.'
  },
  {
    section: 'Info',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laboriosam, esse provident quibusdam exercitationem excepturi, doloribus hic, corrupti veritatis sed aliquam nostrum cupiditate! Veritatis, tenetur a! Obcaecati maxime cum maiores.'
  },
  {
    section: 'Contact',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, dolores pariatur! Possimus aliquid, quisquam fugit dicta sed officia veritatis error suscipit harum natus eligendi maiores, aperiam dignissimos similique et nesciunt!'
  }
]

const sections = contents.reduce(
  function(sections, content){
    sections.push(componentSection(content.section, content.content))
    return sections
  },[])

const components = {}
components.hero = componentHero('Our Restaurent')
components.nav = componentNav()

const content = document.querySelector('#content')

content.appendChild(components.hero)
content.appendChild(components.nav)
// sections.forEach( section => {
//   content.appendChild(section)
// })

const navlinks = document.querySelectorAll('nav a')

navlinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()

  })
})
