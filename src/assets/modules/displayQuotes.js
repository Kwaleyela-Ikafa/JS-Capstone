import { displayPopup } from "./displayPopup"
const itemList = document.querySelector('.item-list')
const popupSection = document.querySelector('.popup')


export const displayQuotes = (data) => {
    data.forEach((item, i) => {
        let idHolder= i + 1;
        item.ids = idHolder.toString()
      });
      console.log(data)
    let slicedArray = data.slice(0, 6)
    slicedArray.map((array) => {
        const item = `<li><span class="">${array.q}</span><br><span class="">${array.a}<button class = "display-popup" type ="button" id = ${array.ids}>Comments</button></span></li>`
        itemList.innerHTML += item

        const displayPopupButton = document.querySelectorAll('.display-popup')
        if (displayPopupButton.length !== 0) {
            for (let i = 0; i < displayPopupButton.length; i++) {
                displayPopupButton[i].addEventListener('click', (e) => {
                    displayPopup(slicedArray, e.target.id)
                })
            }
        }
    })
}




