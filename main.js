const productCard = document.querySelectorAll('.catalog__item');
const changeColorCardButton = document.querySelector('#change-color-card-button');
const greenColorHash = '#00ff00';

changeColorCardButton.addEventListener('click', ()=> {
  productCard.style.backgroundColor = greenColorHash;
})

console.log(productCard)


// 1. Сначала находим кнопку
const btn = document.querySelector('.like-btn');
const counter = document.querySelector('#counter');
let likes = 0;

// 2. Потом вешаем обработчики
btn.addEventListener('click', () => {
  likes = likes + 1;
  counter.textContent = likes;
  console.log('Клик! Всего лайков:', likes);
});

btn.addEventListener('mouseover', () => {
  const x = Math.random() * 100 - 50;
  const y = Math.random() * 100 - 50;
  btn.style.transform = `translate(${x}px, ${y}px)`;
});