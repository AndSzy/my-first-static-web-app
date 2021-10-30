const myModal = new bootstrap.Modal(document.getElementById('welcome-modal'));

myModal.toggle();

fetch('https://lechia-api.azurewebsites.net/players')
  .then(response => response.json())
  .then(players => console.log(players));