

let componentHero = function(content){
  const hero = document.createElement('div')
  hero.classList.add('hero')
  hero.innerHTML = `
    <h1>${content}</h1>
  `
  return hero
}

let componentNav = function(){
  const nav = document.createElement('nav')
  nav.innerHTML = `
    <ul>
      <li>About</li>
      <li>Info</li>
      <li>Contact</li>
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

contents = [
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

const hero = componentHero('Our Restaurent')
const nav = componentNav()
const content = document.querySelector('#content')

content.appendChild(hero)
content.appendChild(nav)
sections.forEach( section => {
  content.appendChild(section)
})