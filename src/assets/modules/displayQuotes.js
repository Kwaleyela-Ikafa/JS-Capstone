import { displayPopup } from './displayPopup'
import { addLikes, displayLikes } from './likes'
const itemList = document.querySelector('.item-list')

export const displayQuotes = (data) => {
  data.forEach((item, i) => {
    const idHolder = i + 1
    item.ids = idHolder.toString()
  })
  console.log(data)
  const slicedArray = data.slice(0, 9)
  // eslint-disable-next-line array-callback-return
  slicedArray.map((array) => {
    const item = `<li>
        <p>${array.text}</p>
        <button class="likes-btn button likes-count" id="${array.ids}" data="${array.ids}">Likes: </button>
        <button class = "display-popup button" type ="button" id = ${array.ids}>Comments</button>   </li>
        `
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
      counterSection.innerHTML = `Displaying ${counterInfo} quotes `
    }
    counter()
  })
  displayLikes()
  addLikes()
}
