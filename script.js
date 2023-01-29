// DOM
const swiper = document.querySelector('#swipe');

const urls = [
    'https://design.gs.com/downloads/Goldman_Sachs_Blue_Box.png',
    'https://1000logos.net/wp-content/uploads/2016/10/American-Airlines-Logo.png',
    'https://tamuhack.com/static/th-2023/assets/bp.png',
    'https://images.law.com/contrib/content/uploads/sites/401/2022/02/USAA-Logo-767x633.jpg',
    'https://image.cnbcfm.com/api/v1/image/106821423-1610125493528-Untitled-5.jpg?v=1610125520'
];

let cardCount = 0;

function appendNewCard(){
    const card = new Card({
        imageUrl:urls[cardCount % 5]
    });
    card.element.style.setProperty('--i', cardCount % 5);
    swiper.append(card.element);
    cardCount++;
}

for (let i = 0; i < 5; i++) {
    appendNewCard();
}