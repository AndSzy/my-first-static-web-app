import { Table } from './modules/table.js';

const tableContentEl = document.getElementById('table-content');

let playersTable = new Table;

fetch('https://lechia-api.azurewebsites.net/players')
.then(response => response.json())
.then(players => {
  playersTable.drawTable(players, tableContentEl, ['First Name', 'Last Name', 'Nationality']);
});