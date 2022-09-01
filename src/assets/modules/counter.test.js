/* eslint-disable no-undef */
// import { countComment, postComment } from './comments.js'
import { countComment } from './_mocks_/countComments.js'
import { counter } from './_mocks_/countItems.js'

test('Number countComment function returns', async () => {
  const initialComments = countComment()
  expect(initialComments).toBe(7)
})

test('Type of countComment', async () => {
  const initialComments = countComment()
  expect(typeof initialComments).toBe('number')
})

test('Number counter function returns', async () => {
  const itemsNumber = counter()
  expect(itemsNumber).toBe(5)
})

test('Type of counter function', async () => {
  const itemsNumber = counter()
  expect(typeof itemsNumber).toBe('number')
})
