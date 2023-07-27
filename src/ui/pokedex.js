import { cargarPaginaAnterior, cargarPaginaSiguiente } from "./paginador.js";
import { cargarPaginaActual } from "./paginaActual.js";
import { recargarPagina } from "./recargarPagina.js";
import { buscadorDePokemon } from "./buscador.js";

const botonAnterior = document.querySelector("#anterior");
const botonSiguiente = document.querySelector("#siguiente");

recargarPagina();
buscadorDePokemon();

const cargarPokemon = async () => {
  try {
    botonAnterior.addEventListener("click", cargarPaginaAnterior);
    botonSiguiente.addEventListener("click", cargarPaginaSiguiente);
    cargarPaginaActual();
  } catch (error) {
    console.log(error);
  }
};

cargarPokemon();
