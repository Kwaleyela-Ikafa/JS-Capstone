const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmFVQXamfCrbM7Ii7gre/likes/'

const getLikes = async () => {
  const response = await fetch(baseUrl)
  const likes = await response.json()
  return likes
}

const setLikes = async (id) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item_id: id
    })
  }).then((data) => data.text())
    .then((result) => result)
    .catch(() => 'error')
  return response
}

// function to display number of likes

export const displayLikes = async () => {
  const likesData = await getLikes()
  const totalLikes = document.querySelectorAll('.likes-count')
  totalLikes.forEach((likes) => {
    const id = likes.getAttribute('data')
    likesData.forEach((item) => {
      if (item.item_id === id) likes.innerHTML = `Likes: ${item.likes}`
    })
  })
}

export const addLikes = () => {
  const likeBtn = document.querySelectorAll('.likes-btn')
  likeBtn.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      e.preventDefault()
      const id = heart.getAttribute('id')
      const currentLikes = parseInt(heart.innerText, 10)
      setLikes(id).then((res) => {
        if (res !== 'error') {
          if (!res.error) {
            const likesCount = document.querySelectorAll('.likes-count')
            likesCount.forEach((likes) => {
              if (e.target.id === id) {
                likes.innerHTML = (currentLikes + 1)
              }
            })
          }
        }
        displayLikes()
      })
    })
  })
}
