import './style.css'
const img = document.querySelector('img');
const refetchButton = document.querySelector('#refetch');

async function getGifs(searchName) {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YKIhJpM6DUDn49DWlU31YGVET3wIpThu&s=' + searchName, {mode: 'cors'})
  const gifData = await response.json();
  img.src = gifData.data.images.original.url;
}

refetchButton.addEventListener('click', () => {
  getGifs(document.querySelector('#searchTerm').value);
})

getGifs('cats');