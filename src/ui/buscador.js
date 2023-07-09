import { mostrarPokemon } from "../mapeadores/pokemonMap.js";

export const buscarPokemon = async () => {
  const valor = buscador.value.trim();

  if (valor === "") {
    return;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
    const data = await response.json();
    document.querySelector("#lista-pokemon").innerHTML = "";
    mostrarPokemon(data);
  } catch (error) {
    console.log(error);
  }

  buscador.value = "";
};
