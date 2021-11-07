import { Table } from './modules/table.js';

import { elements } from './modules/elements.js';

let playersTable = new Table;

fetch('https://lechia-api.azurewebsites.net/players')
.then(response => response.json())
.then(players => {
  playersTable.drawTable(players, elements.tableEl, ['First Name', 'Last Name', 'Nationality']);
});


