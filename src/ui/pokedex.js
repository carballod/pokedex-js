import { obtenerDatosPokemon } from "../api/pokemonAPI.js";
import { mostrarPokemon } from "../mapeadores/pokemonMap.js";
import { cargarPaginaAnterior, cargarPaginaSiguiente, actualizarPaginador, offset } from "./paginador.js";
import { recargarPagina } from "./recargarPagina.js";
import { buscarPokemon } from './buscador.js';


const listaPokemon = document.querySelector("#lista-pokemon");
const botonAnterior = document.querySelector("#anterior");
const botonSiguiente = document.querySelector("#siguiente");
const botonBuscar = document.querySelector(".buscador-icon");
const buscador = document.querySelector("#buscador");
const limite = 9;
export let totalPokemones = 0;

botonBuscar.addEventListener("click", () => {
  buscarPokemon(buscador);
});

recargarPagina();

const cargarPokemon = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
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
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limite}`);
    const data = await response.json();

    listaPokemon.innerHTML = "";

    for (const pokemon of data.results) {
      const pokemonData = await obtenerDatosPokemon(pokemon.url);
      mostrarPokemon(pokemonData);
    }

    actualizarPaginador();
  } catch (error) {
    console.log(error);
  }
};

cargarPokemon();
