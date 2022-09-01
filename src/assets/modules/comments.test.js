/* eslint-disable no-undef */
import { countComment, postComment } from './comments.js'

test('Count comments', async () => {
  const initialComments = countComment(2)
  postComment({
    item_id: 2,
    username: 'Chimwemwe ',
    comment: 'jest test'
  })
  const afterinitialComment = countComment(2)
  expect(initialComments).toBeLessThan(afterinitialComment)
})

test('Type of count is JSON string', async () => {
  const initialComments = countComment(2)
  expect(typeof initialComments).toBe('string')
})
