// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
    
];

const title = [
    'PIMCO',
    'American Airlines',
    'USAA',
    'WolframAlpha',
    'GM',
    'Golden Sachs'
];
let length = title.length;


// variables
let cardCount = 0;

// functions
function appendNewCard(title) {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    },
    title
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
     card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < length; i++) {
  appendNewCard(title[i]);
}
