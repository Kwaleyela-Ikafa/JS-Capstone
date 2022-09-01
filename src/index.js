import './style.css';
import { addLikes, displayLikes } from './assets/modules/like.js';
import { displayCount } from './assets/modules/counter.js';
// import { countComment, getComments, postComment } from './assets/modules/comments.js';

const characterContainer = document.getElementById('characters');
const popUp = document.getElementById('popup');
const apiUrl = 'https://bobsburgers-api.herokuapp.com/characters/';

const characterData = [];

// Functions to get character information

const characterInformation = async () => {
  const request = new Request(apiUrl);
  const response = await fetch(request)
    .then((res) => res.json)
    .then((data) => data.result)
    .catch(() => 'error');
  return response;
};

// function to display comments

// const displayComments = async (id) => {
//   const commentSection = document.getElementById('show-comments');
//   await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmFVQXamfCrbM7Ii7gre/comments?item_id=${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       commentSection.innerHTML = '';
//       data.forEach((comment) => {
//         if (comment.username !== '') {
//           commentSection.innerHTML += `<li>${comment.creation_date}: ${comment.username}  ${comment.comment}</li>`;
//         }
//       });
//     });
// };

// const displayTotalComments = (id) => {
//   const counterArea = popUp.querySelector('.total-comments');
//   totalComments(id).then((res) => {
//     if (res) {
//       counterArea.innerText = res;
//     } else { counterArea.innerText = '0'; }
//   });
// };

const listenToCommentsBtn = () => {
  const btns = document.querySelectorAll('.comment-btn');
  btns.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const id = element.getAttribute('id');
      displayCommentPopUp(id);
    });
  });
};

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
      listenToCommentsBtn();
    });
};

window.onload = () => {
  displayImg();
};
