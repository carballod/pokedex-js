const listaPokemon = document.querySelector("#lista-pokemon");
const botonBuscar = document.querySelector("#buscar-pokemon");
const logo = document.querySelector("#pokemon-logo");
const URL = "https://pokeapi.co/api/v2/";
const POKEMON_ORIGINALES = 151;

logo.addEventListener("click", () => {
  location.reload();
});

const buscarPokemon = async () => {
  const valor = buscador.value.trim();

  if (valor === "" || valor > POKEMON_ORIGINALES) {
    buscador.value = "";
    return;
  }

  try {
    const response = await fetch(`${URL}pokemon/${valor}`);
    const data = await response.json();
    listaPokemon.innerHTML = "";
    mostrarPokemon(data);
  } catch (error) {
    console.log(error);
  }

  buscador.value = "";
};

botonBuscar.addEventListener("click", buscarPokemon);

const cargarPokemon = async () => {
  try {
    const response = await fetch(`${URL}pokemon?limit=${POKEMON_ORIGINALES}`);
    const data = await response.json();

    for (let i = 1; i <= POKEMON_ORIGINALES; i++) {
      const pokemon = data.results.find((p) => obtenerIdPokemonDesdeUrl(p.url) === i);
      if (pokemon) {
        const pokemonData = await obtenerDatosPokemon(pokemon.url);
        mostrarPokemon(pokemonData);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const obtenerDatosPokemon = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const obtenerIdPokemonDesdeUrl = (url) => {
  const partes = url.split("/");
  return parseInt(partes[partes.length - 2]);
};

const mostrarPokemon = (data) => {
  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
    <p class="pokemon-id-back">#${data.id}</p>
    <div class="pokemon-imagen">
      <img
        src="${data.sprites.other.dream_world.front_default}"
        alt="${data.name}"
      />
    </div>
    <div class="pokemon-info">
      <div class="nombre-contenedor">
        <p class="pokemon-id">#${data.id}</p>
        <h2 class="pokemon-nombre">${data.name}</h2>
      </div>
    </div>`;
  listaPokemon.appendChild(div);
};

cargarPokemon();
