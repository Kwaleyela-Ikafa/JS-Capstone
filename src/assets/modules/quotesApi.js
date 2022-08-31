import { displayQuotes } from "./displayQuotes";
const api_url ="https://type.fit/api/quotes";
const header = new Headers({ "Access-Control-Allow-Origin": "*" });
const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'*'}

      

export async function getApi() {
  const response = await fetch(api_url, { headers: header})
  .then(response => response.json())
  .then(data => displayQuotes(data))
  return response
}

