import { postComment, getComments, countComment } from "./comments"
const popupSection = document.querySelector('.popup')

export const displayPopup = (popupdata, id) => {
    popupdata.map((data) => {
        if (id === data.ids) {
            const item = `    
            <p>${data.author}</p>
            <p>Author ${data.text}</p>
            <p class="comment-counter"></p>
            <ul class="comments-section"></ul>
            <form class="comments-form">
                <input type="text" placeholder="Name"  id="username">
                <input type="text" placeholder="Your Comment"  id="user-comment">

                <button class= "submit" type="button" id="${data.ids}">Submit</button> 
            </form>
            <button class="" type="button">close</button>`
            popupSection.innerHTML += item
        }
    })
    const commentSection = document.querySelector('.comments-section')
    getComments(id, commentSection)
    const submitButton = document.querySelector('.submit')
    submitButton.addEventListener('click', (e) => {
    const commentCounter = document.querySelector('.comment-counter')
    const username = document.getElementById('username').value
    const comment = document.getElementById('user-comment').value
    console.log(username, comment)
    postComment(id, username, comment,)})
}