const img = document.querySelector('.img');

const imgNum = Math.floor(Math.random() * 7 ) + 1;

img.setAttribute('src', `./img/${imgNum}.png`);

