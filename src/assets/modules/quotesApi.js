import { displayQuotes } from './displayQuotes'
const apiUrl = 'https://type.fit/api/quotes'

export async function getApi () {
  const response = await fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayQuotes(data))
  return response
}
