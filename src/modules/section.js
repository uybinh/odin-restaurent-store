let componentSection = function(section, content){
  const element = document.createElement('section')
  element.innerHTML = `
  <h2>${section}</h2>
  <p>${content}</p>
  `
  return element
}

export default componentSection