import { obtenerDatosPokemon } from "../api/pokemonAPI.js";
import { mostrarPokemon } from "../mapeadores/pokemonMap.js";
import { cargarPaginaAnterior, cargarPaginaSiguiente, offset, limite } from "./paginador.js";
import { recargarPagina } from "./recargarPagina.js";
import { buscadorDePokemon } from "./buscador.js";

const listaPokemon = document.querySelector("#lista-pokemon");
const botonAnterior = document.querySelector("#anterior");
const botonSiguiente = document.querySelector("#siguiente");
export let totalPokemones = 0;

recargarPagina();
buscadorDePokemon();

const cargarPokemon = async () => {
  try {
    const data = await obtenerDatosPokemon('https://pokeapi.co/api/v2/pokemon');
    totalPokemones = data.count;

    botonAnterior.addEventListener("click", cargarPaginaAnterior);
    botonSiguiente.addEventListener("click", cargarPaginaSiguiente);
    cargarPagina();
  } catch (error) {
    console.log(error);
  }
};

export const cargarPagina = async () => {
  try {
    const data = await obtenerDatosPokemon(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limite}`);
    listaPokemon.innerHTML = "";

    const pokemonPromises = data.results.map((pokemon) => obtenerDatosPokemon(pokemon.url));

    const pokemonsData = await Promise.all(pokemonPromises);
    pokemonsData.forEach((pokemonData) => mostrarPokemon(pokemonData));
  } catch (error) {
    console.log(error);
  }
};

cargarPokemon();
