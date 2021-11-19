import { Table } from './modules/table.js';

const tableContentEl = document.getElementById('table-content');

let playersTable = new Table;

fetch('https://lechia-api.azurewebsites.net/players')
.then(response => response.json())
.then(players => {

  let goalkeepers = [];
  let defenders = [];
  let midfielders = [];
  let forwards = [];

  players.forEach((player) => {
    if(player.position == 'Goalkeeper') {
      goalkeepers.push(player);
    } else if (player.position == 'Defender') {
      defenders.push(player);
    } else if (player.position == 'Midfielder') {
      midfielders.push(player);
    } else if (player.position == 'Forward') {
      forwards.push(player);
    } 
  })


  playersTable.drawTable(goalkeepers, tableContentEl, ['First Name', 'Last Name', 'Position', 'Nationality'], 'Goalkeepers');
  playersTable.drawTable(defenders, tableContentEl, ['First Name', 'Last Name', 'Position', 'Nationality'], 'Defenders');
  playersTable.drawTable(midfielders, tableContentEl, ['First Name', 'Last Name', 'Position', 'Nationality'], 'Midfielders');
  playersTable.drawTable(forwards, tableContentEl, ['First Name', 'Last Name', 'Position', 'Nationality'], 'Forwards');
});