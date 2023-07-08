const listaPokemon = document.querySelector("#lista-pokemon");
const buscador = document.querySelector("#buscador");
const botonBuscar = document.querySelector(".buscador-icon");
const logo = document.querySelector("#pokemon-logo");
const URL = "https://pokeapi.co/api/v2/";

const paginador = document.querySelector("#paginador");
const botonAnterior = document.querySelector("#anterior");
const botonSiguiente = document.querySelector("#siguiente");
let offset = 0;
const limite = 9;
let totalPokemones = 0;

logo.addEventListener("click", () => {
  location.reload();
});

const buscarPokemon = async () => {
  const valor = buscador.value.trim();

  if (valor === "") {
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
    const response = await fetch(`${URL}pokemon`);
    const data = await response.json();
    totalPokemones = data.count;

    botonAnterior.addEventListener("click", cargarPaginaAnterior);
    botonSiguiente.addEventListener("click", cargarPaginaSiguiente);
    cargarPagina();
  } catch (error) {
    console.log(error);
  }
};

const cargarPagina = async () => {
  try {
    const response = await fetch(`${URL}pokemon?offset=${offset}&limit=${limite}`);
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

const cargarPaginaAnterior = () => {
  offset -= limite;
  if (offset < 0) {
    offset = 0;
  }
  cargarPagina();
};

const cargarPaginaSiguiente = () => {
  offset += limite;
  if (offset >= totalPokemones) {
    offset -= limite;
  }
  cargarPagina();
};

const actualizarPaginador = () => {
  const paginaActual = offset / limite + 1;
  const totalPaginas = Math.ceil(totalPokemones / limite);

  botonAnterior.disabled = paginaActual === 1;
  botonSiguiente.disabled = paginaActual === totalPaginas;
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
