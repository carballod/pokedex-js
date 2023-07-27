import { obtenerDatosPokemon } from "../api/pokemonAPI.js";
import { mostrarPokemon } from "../mapeadores/pokemonMap.js";
import { actualizarPaginador } from "./paginador.js";

const listaPokemon = document.querySelector("#lista-pokemon");
export const limite = 9;

export const pokemonData = {
    totalPokemones: 0,
    offset: 0,
  };
  
  export const cargarPaginaActual = async () => {
    try {
      const data = await obtenerDatosPokemon(`https://pokeapi.co/api/v2/pokemon?offset=${pokemonData.offset}&limit=${limite}`);
      listaPokemon.innerHTML = "";
  
      const pokemonPromises = data.results.map((pokemon) => obtenerDatosPokemon(pokemon.url));
  
      const traerPokemones = await Promise.all(pokemonPromises);
      traerPokemones.forEach((pokemones) => mostrarPokemon(pokemones));
  
      pokemonData.totalPokemones = data.count;
  
      actualizarPaginador();
    } catch (error) {
      console.log(error);
    }
  };