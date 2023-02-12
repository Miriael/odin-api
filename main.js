import './style.css'

let searchName = 'cats'
const img = document.querySelector('img');
const refetchButton = document.querySelector('#refetch')
fetch('https://api.giphy.com/v1/gifs/translate?api_key=YKIhJpM6DUDn49DWlU31YGVET3wIpThu&s=' + searchName, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  });

refetchButton.addEventListener('click', () => {
  searchName = searchTerm.value
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=YKIhJpM6DUDn49DWlU31YGVET3wIpThu&s=' + searchName, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  })  
  .catch(function(err) {
    img.src = 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg'
  });
})

