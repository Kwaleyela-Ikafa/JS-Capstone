import { displayPopup, displayQuotes } from "./displayQuotes";
const itemList = document.querySelector('.item-list')
export async function getApi(data)

{
  const response = await fetch('https://zenquotes.io/api/quotes/',)
  .then(response => response.json())
  .then(data => displayQuotes(data))
  return response
}
