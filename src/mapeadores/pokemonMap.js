const listaPokemon = document.querySelector("#lista-pokemon");

export const mostrarPokemon = (data) => {
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