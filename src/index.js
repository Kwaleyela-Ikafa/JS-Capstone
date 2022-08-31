import './style.css';
import { addLikes, displayLikes } from './assets/modules/like.js';
import { displayCount } from './assets/modules/counter.js';

const characterContainer = document.getElementById('characters');
const apiUrl = 'https://bobsburgers-api.herokuapp.com/characters/';

const characterData = [];

// const characterInformation = async () => {
//   const request = new Request(apiUrl);
//   const response = await fetch(request)
//     .then((res) => res.json)
//     .then((data) => data.result)
//     .catch(() => 'error');
//   return response;
// };

// function to display character images

const displayImg = () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      data = data.slice(0, 6);

      if (data) {
        data.forEach((character) => {
          characterContainer.innerHTML += `
      <li id="${character.id}" class="cards">
        <div class="album-image">
          <img src="${character.image}" alt="album ${character.name}">
        </div>

        <div class="like-section">
          <p class="char-name"> ${character.name}</p>
          <p id='${character.id}' class="likes-btn">
          <i class="far fa-heart like-icon"> </i> <span class= "likes-count" data="${character.id}"></span><i> <strong>Likes </strong></i>
          </p>
        </div>
        <button value="${character.id}" class="comment-btn" id="${character.id}">Comments</button>
      </li>
      `;
          characterData.push(character);
        });
      }
      addLikes();
      displayLikes();
      displayCount();
    });
};

window.onload = () => {
  displayImg();
};