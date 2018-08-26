let componentHero = function(content){
  const hero = document.createElement('div')
  hero.classList.add('hero')
  hero.innerHTML = `
    <span><h1>${content}</h1></span>
  `
  return hero
}

export default componentHero