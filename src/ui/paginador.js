import { cargarPagina, totalPokemones } from "./pokedex.js";

const botonAnterior = document.querySelector("#anterior");
const botonSiguiente = document.querySelector("#siguiente");
export let offset = 0;
const limite = 9;

export const cargarPaginaAnterior = () => {
  offset -= limite;
  if (offset < 0) {
    offset = 0;
  }
  cargarPagina();
};

export const cargarPaginaSiguiente = () => {
  offset += limite;
  if (offset >= totalPokemones) {
    offset -= limite;
  }
  cargarPagina();
};

export const actualizarPaginador = () => {
  const paginaActual = offset / limite + 1;
  const totalPaginas = Math.ceil(totalPokemones / limite);

  botonAnterior.disabled = paginaActual === 1;
  botonSiguiente.disabled = paginaActual === totalPaginas;
};
