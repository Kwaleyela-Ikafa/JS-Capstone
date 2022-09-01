const comments = [1, 2, 3, 4, 5, 6, 7]

export const countComment = () => {
  if (comments.length > 0) {
    return comments.length
  }
  return 'No comments'
}
