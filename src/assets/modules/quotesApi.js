const api_url ="https://zenquotes.io/api/quotes/"

export async function getapi(url)
{
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getapi(api_url);

