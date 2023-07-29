/**
 * @jest-environment jsdom
 */
import { cargarPaginaAnterior, cargarPaginaSiguiente, actualizarPaginador } from "../paginador.js";
import { cargarPaginaActual, pokemonData } from "../paginaActual.js";

// datos que se utilizan en las funciones
jest.mock("../paginaActual.js", () => ({
  cargarPaginaActual: jest.fn(),
  manejarBotonesPaginador: jest.fn(),
  actualizarPaginador: jest.fn(),
  limite: 10,
  pokemonData: {
    offset: 20,
    totalPokemones: 50,
  },
}));

let botonAnterior;
let botonSiguiente;

describe("Pruebas en el paginador", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <button id="anterior" disable>Anterior</button>
    <button id="siguiente">Siguiente</button>
    `;
    botonAnterior = document.querySelector("#anterior");
    botonSiguiente = document.querySelector("#siguiente");

    jest.clearAllMocks();
  });

  test("la funcion cargarPaginaAnterior disminuye el offset y cargar la pagina actual", () => {
    cargarPaginaAnterior();
    expect(pokemonData.offset).toBe(10);
    expect(cargarPaginaActual).toHaveBeenCalledTimes(1);
  });

  test("la funcion cargarPaginaAnterior no disminuye el offset si es menor a 0", () => {
    pokemonData.offset = 5;
    cargarPaginaAnterior();
    expect(pokemonData.offset).toBe(0);
    expect(cargarPaginaActual).toHaveBeenCalledTimes(1);
  });

  test("la funcion cargarPaginaSiguiente no debe aumentar el offset si alcanza el totalPokemones", () => {
    pokemonData.offset = 40;
    cargarPaginaSiguiente();
    expect(pokemonData.offset).toBe(40);
    expect(cargarPaginaActual).toHaveBeenCalledTimes(1);
  });

  test("la funcion actualizarPaginador direcciona correctamente", () => {
    pokemonData.offset = 40;
    actualizarPaginador();
    expect(botonAnterior.disabled).toBe(false);
    expect(botonSiguiente.disabled).toBe(false);
  });
});
