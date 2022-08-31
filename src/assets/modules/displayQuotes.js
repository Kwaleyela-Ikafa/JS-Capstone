import { displayPopup } from "./displayPopup"
import { addLikes, displayLikes } from "./likes"
const itemList = document.querySelector('.item-list')
const popupSection = document.querySelector('.popup')


export const displayQuotes = (data) => {
    data.forEach((item, i) => {
        let idHolder= i + 1;
        item.ids = idHolder.toString()
      });
    let slicedArray = data.slice(0, 6)
    slicedArray.map((array) => {
        const item = `<li><span class="">${array.q}</span><br><span class="">${array.a}<button class = "display-popup" type ="button" id = ${array.ids}>Comments</button></span><button class="likes-btn" id="${array.ids}">Likes</button><p class="likes-count" data="${array.ids}"></p></li>`
        itemList.innerHTML += item



        const displayPopupButton = document.querySelectorAll('.display-popup')
        if (displayPopupButton.length !== 0) {
            for (let i = 0; i < displayPopupButton.length; i++) {
                displayPopupButton[i].addEventListener('click', (e) => {
                    displayPopup(slicedArray, e.target.id)
                })
            }
        }
        const counter = () => {
            const counterSection = document.querySelector('.counter')
            const counterInfo = slicedArray.length
            counterSection.innerHTML = counterInfo
        }
        counter()
    })
    displayLikes()
    addLikes()
}




