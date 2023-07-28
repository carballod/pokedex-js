import { obtenerDatosPokemon } from "../api/pokemonAPI.js";
import { mapearPokemon } from "../mapeadores/mapearPokemon.js";
import { mostrarPokemon } from "./mostrarPokemon.js";
import { actualizarPaginador, cargarPaginaAnterior, cargarPaginaSiguiente } from "./paginador.js";

const botonAnterior = document.querySelector("#anterior");
const botonSiguiente = document.querySelector("#siguiente");
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
  
      const traerPokemons = data.results.map((pokemon) => obtenerDatosPokemon(pokemon.url));
      const pokemonsPorPagina = await Promise.all(traerPokemons);

      const pokemonsMapeados = pokemonsPorPagina.map((pokemonPorPagina) => mapearPokemon(pokemonPorPagina));
      pokemonsMapeados.forEach((pokemon) => mostrarPokemon(pokemon));

      pokemonData.totalPokemones = data.count;

      botonAnterior.addEventListener("click", cargarPaginaAnterior);
      botonSiguiente.addEventListener("click", cargarPaginaSiguiente);
  
      actualizarPaginador();
      
    } catch (error) {
      console.log(error);
    }
  };
