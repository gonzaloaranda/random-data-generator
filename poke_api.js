import axios from "axios";

async function getPokemon() {
  const randomId = Math.floor(Math.random() * 151) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
  const response = await axios.get(url);
  const { name, id } = response.data;
  return { name, id };
}

export default getPokemon;
