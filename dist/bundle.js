!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){contents=[{section:"About",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores iure accusamus, veniam natus molestiae sequi laboriosam perspiciatis porro unde fugiat velit repellendus sed exercitationem maiores, dolorem ad culpa! Saepe, nemo."},{section:"Info",content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laboriosam, esse provident quibusdam exercitationem excepturi, doloribus hic, corrupti veritatis sed aliquam nostrum cupiditate! Veritatis, tenetur a! Obcaecati maxime cum maiores."},{section:"Contact",content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, dolores pariatur! Possimus aliquid, quisquam fugit dicta sed officia veritatis error suscipit harum natus eligendi maiores, aperiam dignissimos similique et nesciunt!"}];const n=contents.reduce(function(e,t){return e.push(function(e,t){const n=document.createElement("section");return n.innerHTML=`\n  <h2>${e}</h2>\n  <p>${t}</p>\n  `,n}(t.section,t.content)),e},[]),i=function(e){const t=document.createElement("div");return t.classList.add("hero"),t.innerHTML=`\n    <h1>${e}</h1>\n  `,t}("Our Restaurent"),o=function(){const e=document.createElement("nav");return e.innerHTML="\n    <ul>\n      <li>About</li>\n      <li>Info</li>\n      <li>Contact</li>\n    </ul>\n  ",e}(),r=document.querySelector("#content");r.appendChild(i),r.appendChild(o),n.forEach(e=>{r.appendChild(e)})}]);