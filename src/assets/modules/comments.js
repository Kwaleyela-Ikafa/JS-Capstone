//o6txESDfE27QaTrvkBpH API ID
// const commentSection = document.querySelector('.comments-section')

export const countComment = (json) => {
  if (json.length > 0) {
    return `Comments(<span class="comment-count-number">${json.length}</span>)`;
  }
  return '<li>No comments</li>';
};

export const getComments = async (id, commentSection) => {
    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o6txESDfE27QaTrvkBpH/comments?item_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.length > 0) {
          json.forEach((item) => {
            commentSection.innerHTML += `<li class="comments-section">${item.creation_date} ${item.username}: ${item.comment}</li>`;
          });
        }
        const commentCounter = document.querySelector('.comment-counter')
        commentCounter.innerHTML = countComment(json);
      });
  };

  export const postComment = (id, username, comment) => {
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o6txESDfE27QaTrvkBpH/comments', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username: username,
        comment: comment,
      }),
    })
      .then((response) => response.text())
      .then((json) => json)
      .catch((error) => {
        console.log(error);
      });
      // location.reload()
  };