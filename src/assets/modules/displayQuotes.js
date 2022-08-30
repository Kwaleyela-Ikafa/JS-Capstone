const itemList = document.querySelector('.item-list')
const popupSection = document.querySelector('.popup')

export const displayQuotes = (data) => {
    let slicedArray = data.slice(0, 6)
    slicedArray.map((array) => {
        const item = `<li> Name: <span class="">${array.q}</span><br> Score:<span class="">${array.a}<button class = "display-popup" type ="button" id = ${array.c}>Comments</button></span></li>`
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

const displayPopup = (popupdata, id) => {
    popupdata.map((data) => {
        if (id === data.c) {
            const item = `<li> Name: <span class="">${data.q}</span><br> Score:<span class="">${data.a}<button class = "" type ="button">close</button></span></li>`
            popupSection.innerHTML += item
        }
    })
}




