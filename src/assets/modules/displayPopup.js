import { postComment, getComments } from './comments'
const popupSection = document.querySelector('.popup')

export const displayPopup = (popupdata, id) => {
  // eslint-disable-next-line array-callback-return
  popupdata.map((data) => {
    if (id === data.ids) {
      const item = ` 
            <div class="close-div">   
            <p>${data.author}</p>
            <button class="close-button" type="button">X</button>
            </div>
            <p>${data.text}</p>
            <p class="comment-counter"></p>
            <ul class="comments-container comments-section"></ul>
            <form class="comments-form">
                <input type="text" placeholder="Name"  id="username">
                <input type="text" placeholder="Your Comment"  id="user-comment">

                <button class= "submit" type="button" id="${data.ids}">Submit</button> 
            </form>
            `
      popupSection.innerHTML += item
    }
  })
  const closeButton = document.querySelector('.close-button')
  closeButton.addEventListener('click', () => {
    document.querySelector('.popup').style.visibility = 'hidden'
    popupSection.innerHTML = ''
    document.getElementById('layer1').id = 'layer'
  })
  document.querySelector('.popup').style.visibility = 'visible'
  document.getElementById('layer').id = 'layer1'
  const commentSection = document.querySelector('.comments-section')
  getComments(id, commentSection)
  const submitButton = document.querySelector('.submit')
  submitButton.addEventListener('click', (e) => {
    const username = document.getElementById('username').value
    const comment = document.getElementById('user-comment').value
    console.log(username, comment)
    postComment(id, username, comment)
  })
}
