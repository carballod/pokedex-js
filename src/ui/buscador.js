import { obtenerDatosPokemon } from "../api/pokemonAPI.js";
import { mapearPokemon } from "../mapeadores/mapearPokemon.js";
import { mostrarPokemon } from "./mostrarPokemon.js";

const buscador = document.querySelector("#buscador");

const buscarUnPokemon = async (nombrePokemon) => {
  try {
    if (isNaN(nombrePokemon)) return;
    const data = await obtenerDatosPokemon(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
    document.querySelector("#lista-pokemon").innerHTML = "";

    const pokemon = mapearPokemon(data);
    mostrarPokemon(pokemon);
  } catch (error) {
    throw new Error(error);
  }
};

export const buscadorDePokemon = () => {
  buscador.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const valor = buscador.value.trim();
      if (valor === "") return;
      
      buscarUnPokemon(valor);
      buscador.value = "";
    }
  });
};