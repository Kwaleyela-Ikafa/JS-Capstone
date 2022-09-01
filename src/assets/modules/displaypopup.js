import { countComment, getComments, postComment } from './assets/modules/comments.js';

const displayPopup = (popupdata, id) => {
  popupdata.map((data) => {
    if (data.id === id) {
      const item = `
        <div class="popup-con">
        <i id="closePopUp" class="fas fa-times"></i>
        <div class="popup">
            <img class="pop-up-img" id="img" src="${data.image}" alt="close-btn">
        </div>
        <div>   
            <h2>Comments (<span class="total-comments"></span>)</h2>      
            <ul class=".comments-section">
  
            </ul>
        </div>
            
        <form id="form" class="inputs">
            <h2>Add Comment</h2><br>
            <input type="hidden" name="movie_id" value="${id}">
            <input id="name" type="text" placeholder="Your name" required><br>
            <input id="comment" type="text" placeholder="comments" required>
            <button id="sendBtn" type="submit">comment</button>
        </form>
    </div>`;
      popUp.innerHTML += item;
    }
  });
  const commentSection = document.querySelector('.comments-section');
  getComments(id, commentSection);
  const submitButton = document.querySelector('.submit');
  submitButton.addEventListener('click', (e) => {
    const commentCounter = document.querySelector('.comment-counter');
    const username = document.getElementById('username').value;
    const comment = document.getElementById('user-comment').value;
    console.log(username, comment);
    postComment(id, username, comment);
  });
};