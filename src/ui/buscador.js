import { obtenerDatosPokemon } from "../api/pokemonAPI.js";
import { mostrarPokemon } from "../mapeadores/pokemonMap.js";

const buscador = document.querySelector("#buscador");

const buscarUnPokemon = async () => {
  const valor = buscador.value.trim();
  if (valor === "") return;

  try {
    const data = await obtenerDatosPokemon(`https://pokeapi.co/api/v2/pokemon/${valor}`);
    document.querySelector("#lista-pokemon").innerHTML = "";
    mostrarPokemon(data);
  } catch (error) {
    console.log(error);
  }

  buscador.value = "";
};

export const buscadorDePokemon = () => {
  buscador.addEventListener("keyup", (event) => {
    if (event.key === "Enter") buscarUnPokemon(buscador)
  })
};
