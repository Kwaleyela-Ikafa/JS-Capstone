import Storage from './storage';

// function to count number of elements

const itemCounter = () => {
  const cards = document.querySelectorAll('.cards');
  return cards.length;
};

const displayCount = () => {
  let characterCount = document.querySelector('.character-count');
  const active = Storage.getItem('active');
  if (active) {
    characterCount = document.querySelector(`.character-count.${active}`);
    Storage.setItem('active', '');
  }
  const span = document.createElement('span');
  span.className = 'item-count';
  span.innerHTML += `(${itemCounter()})`;
  characterCount.appendChild(span);
};

export { displayCount, itemCounter };