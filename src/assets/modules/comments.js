// const getComments = async (id) => {
//   const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmFVQXamfCrbM7Ii7gre/comments?item_id=${id}`);
//   const comments = await response.json();
//   return comments;
// };

const countComment = (json) => {
  if (json.length > 0) {
    return `Comments(<span class="comment-count-number">${json.length}</span>)`;
  }
  return '<li>No comments</li>';
};

const getComments = async (id, commentSection) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmFVQXamfCrbM7Ii7gre/comments?item_id=${id}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.length > 0) {
        json.forEach((item) => {
          commentSection.innerHTML += `<li class="comments-section">${item.creation_date} ${item.username}: ${item.comment}</li>`;
        });
      }
      const commentCounter = document.querySelector('.comment-counter');
      commentCounter.innerHTML = countComment(json);
    });
};

const postComment = (id, username, comment) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmFVQXamfCrbM7Ii7gre/comments', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  })
    .then((response) => response.text())
    .then((json) => json)
    .catch((error) => {
      console.log(error);
    });
  // location.reload()
};

export { countComment, getComments, postComment };

// const totalComments = async (id) => {
//   const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmFVQXamfCrbM7Ii7gre/comments?item_id=${id}`)
//     .then((response) => response.json())
//     .then((data) => data.length)
//     .catch(() => 0);

//   return response;
// };