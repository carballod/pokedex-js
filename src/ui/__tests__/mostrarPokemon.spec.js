import { mostrarPokemon } from "../mostrarPokemon.js";

const pokemon = {
  id: 25,
  nombre: "Pikachu",
  foto: "pikachu.png",
};

describe("pruebas en mostrarPokemon()", () => {
  beforeEach(() => {
    document.body.innerHTML = `
          <div class="pokemon-todos" id="lista-pokemon"></div>
        `;
  });

  test("crea correctamente el div con la clase 'pokemon'", () => {
    mostrarPokemon(pokemon);
    const pokemonDiv = document.querySelector(".pokemon");

    expect(pokemonDiv.classList.contains("pokemon")).toBe(true);
  });

  test("muestra correctamente la información del pokemon", () => {
    mostrarPokemon(pokemon);
    const pokemonDiv = document.querySelector(".pokemon");

    expect(pokemonDiv.querySelector('.pokemon-id-back').textContent).toBe(`#${pokemon.id}`);
    expect(pokemonDiv.querySelector('img').getAttribute('src')).toBe(pokemon.foto);
    expect(pokemonDiv.querySelector('img').getAttribute('alt')).toBe(pokemon.nombre);
    expect(pokemonDiv.querySelector('.pokemon-id').textContent).toBe(`#${pokemon.id}`);
    expect(pokemonDiv.querySelector('.pokemon-nombre').textContent).toBe(pokemon.nombre);
  });

});
