import './scss/style.scss'
import componentHero from './modules/hero'
import componentNav from './modules/nav';
import sectionInfo from './modules/section-info';
import sectionContact from './modules/section-contact';
import sectionAbout from './modules/section-about';


const components = {
  hero: componentHero('Our Restaurent'),
  nav: componentNav(),
  info: sectionInfo(),
  contact: sectionContact(),
  about: sectionAbout()
}

const content = document.querySelector('#content')
content.appendChild(components.hero)
content.appendChild(components.nav)

const navlinks = document.querySelectorAll('nav a')

navlinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()
    const section = document.querySelector('section')
    if (section) {
      section.parentElement.removeChild(section)
    }
    const sectionName = event.target.dataset.section
    content.appendChild(components[sectionName])
  })
})

console.log(components)
