import { Table } from './modules/table.js';

import { elements } from './modules/elements.js';

import { offsetScroll } from './modules/functions.js'

elements.teamLinkEl.addEventListener('click', () => {
  event.preventDefault();
  const id = 'table-container';
  const yOffset = -85; 
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  console.log(y);

  window.scrollTo({top: y, behavior: 'smooth'});
})

let playersTable = new Table;

fetch('https://lechia-api.azurewebsites.net/players')
.then(response => response.json())
.then(players => {
  playersTable.drawTable(players, elements.tableEl, ['First Name', 'Last Name', 'Nationality']);
});



