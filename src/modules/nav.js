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

export default componentNav