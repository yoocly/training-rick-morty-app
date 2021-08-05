export async function getCharacters() {
  const url = 'https://rickandmortyapi.com/api/character';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
