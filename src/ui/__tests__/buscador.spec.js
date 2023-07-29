/**
 * @jest-environment jsdom
 */
import { obtenerDatosPokemon } from "../../api/pokemonAPI.js";
import { mapearPokemon } from "../../mapeadores/mapearPokemon.js";
import { mostrarPokemon } from "../mostrarPokemon.js";

jest.mock("../../api/pokemonAPI.js");
jest.mock("../../mapeadores/mapearPokemon.js");
jest.mock("../mostrarPokemon.js");

describe("Pruebas en el buscador", () => {
  beforeEach(() => {
    document.body.innerHTML = `
          <input type="text" id="buscador" />
          <div id="lista-pokemon"></div>
        `;

    jest.clearAllMocks();
  });

  test("no hace nada si se ingresa algo vacio", async () => {
    const valorBuscador = "";
    const buscador = document.querySelector("#buscador");
    buscador.value = valorBuscador;

    const event = new KeyboardEvent("keyup", { key: "Enter" });
    buscador.dispatchEvent(event);

    expect(obtenerDatosPokemon).not.toHaveBeenCalled();
    expect(mapearPokemon).not.toHaveBeenCalled();
    expect(mostrarPokemon).not.toHaveBeenCalled();
  });

  test("no hace nada si se ingresa un numero mayor a 898", async () => {
    const valorBuscador = 899;
    const buscador = document.querySelector("#buscador");
    buscador.value = valorBuscador;

    const event = new KeyboardEvent("keyup", { key: "Enter" });
    buscador.dispatchEvent(event);

    expect(obtenerDatosPokemon).not.toHaveBeenCalled();
    expect(mapearPokemon).not.toHaveBeenCalled();
    expect(mostrarPokemon).not.toHaveBeenCalled();
  });

  test('no hace nada si se ingresa algo que no es un número', async () => {
    const valorBuscador = 'Pikachu';
    const buscador = document.querySelector('#buscador');
    buscador.value = valorBuscador;

    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    buscador.dispatchEvent(event);

    expect(obtenerDatosPokemon).not.toHaveBeenCalled();
    expect(mapearPokemon).not.toHaveBeenCalled();
    expect(mostrarPokemon).not.toHaveBeenCalled();
  });

});
