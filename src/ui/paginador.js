import { cargarPaginaActual, limite, pokemonData } from "./paginaActual.js";

const botonAnterior = document.querySelector("#anterior");
const botonSiguiente = document.querySelector("#siguiente");


export const cargarPaginaAnterior = () => {
  pokemonData.offset -= limite;
  if (pokemonData.offset < 0) {
    pokemonData.offset = 0;
  }
  cargarPaginaActual();
};

export const cargarPaginaSiguiente = () => {
  pokemonData.offset += limite;
  if (pokemonData.offset >= pokemonData.totalPokemones) {
    pokemonData.offset -= limite;
  }
  cargarPaginaActual();
};

export const actualizarPaginador = () => {
  const paginaActual = pokemonData.offset / limite + 1;
  const totalPaginas = Math.ceil(pokemonData.totalPokemones / limite);

  botonAnterior.disabled = paginaActual === 1;
  botonSiguiente.disabled = paginaActual === totalPaginas;
};
