const listaPokemon = document.querySelector("#lista-pokemon");
const botonBuscar = document.querySelector("#buscar-pokemon");
const logo = document.querySelector("#pokemon-logo");
const URL = "https://pokeapi.co/api/v2/";

logo.addEventListener("click", () => {
  location.reload();
});

const buscarPokemon = async () => {
  const valor = buscador.value.trim();

  if (valor === "" || valor > 151) {
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

const mostrarTodosPokemon = async () => {
  try {
    for (let i = 1; i <= 151; i++) {
      const response = await fetch(`${URL}pokemon/${i}`);
      const data = await response.json();
      mostrarPokemon(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const mostrarPokemon = (data) => {
  const tipos = data.types
    .map((tipo) => `<p class="tipo">${tipo.type.name}</p>`)
    .join("");

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
      <div class="pokemon-tipos">
        ${tipos}
      </div>
      <div class="pokemon-stats">
        <p class="stats">${data.height}M</p>
        <p class="stats">${data.weight}KG</p>
      </div>
    </div>`;
  listaPokemon.appendChild(div);
};

mostrarTodosPokemon();